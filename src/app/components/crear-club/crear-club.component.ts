import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { ClubService } from '../../service/club.service';
import { NewClub } from '../../models/club';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-crear-club',
  templateUrl: './crear-club.component.html',
  styleUrls: ['./crear-club.component.css']
})
export class CrearClubComponent implements OnInit {
  clubForm: FormGroup;
  title = 'CREAR CLUB';
  id: string | null;
  users: User[] = [];
  dataSource = new MatTableDataSource(this.users);
  checkedUsers: User[] = [];
  subscribeUsers: boolean = false;

  displayedColumns: string[] = [
    'checkedUsers',
    '_id',
    'userName',
    'fullName'
  ];

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _clubService: ClubService,
    private _userService: UserService,
    private aRouter: ActivatedRoute
  ) {
    this.clubForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      admin: ['', Validators.required],
      category: ['', Validators.required],
    });

    this.id = this.aRouter.snapshot.paramMap.get('id');

  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    if (this.id) {
      this.title = "SUBSCRIBE USERS TO CLUB"
      this.subscribeUsers = true;
    }

    this._userService.getUsers().subscribe(
      (userlist) => {
        console.log(userlist);
        this.users = userlist;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.toastr.error(
          `Error ${error.status}, ${error.statusText}`,
          'Http error'
        );
      }
    );
  }

  submit() {
    if (!this.subscribeUsers) {
      console.log("I am here")
      this.addClub()
    }
    else {
      console.log("I should be here")
      this.checkedUsers.map(userID => {
        this._clubService.subscribe(this.id!, userID._id!).subscribe()
      });
      this.router.navigate(['/listar-clubs']);
    }
  }

  addClub() {
    const club: NewClub = {
      clubName: this.clubForm.get('name')?.value,
      description: this.clubForm.get('description')?.value,
      idAdmin: this.clubForm.get('admin')?.value,
      category: this.clubForm.get('category')?.value,
    };

    this._clubService.addClub(club).subscribe(
      (data) => {
        this.toastr.success('El Club ha estat creat amb exit!', 'Club Creat');
        console.log(data);
        console.log(data._id!);
        this.checkedUsers.map(userID => {
          this._clubService.subscribe(data._id!, userID._id!).subscribe()
        });
        this.router.navigate(['/listar-clubs']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.toastr.error(
          `Error ${error.status}, ${error.statusText}`,
          'Http error'
        );
      }
    );
  }

  checkBoxChange(event: any, user: User) {
    if (event.target.checked) {
      if (this.checkedUsers.includes(user)) return;

      this.checkedUsers.push(user);
    } else {
      if (!this.checkedUsers.includes(user)) return;

      const index = this.checkedUsers.indexOf(user);
      if (index > -1) this.checkedUsers.splice(index, 1);
    }
    console.log(this.checkedUsers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
