import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {
  userForm: FormGroup;
<<<<<<< HEAD
  title = "Crear User";
  name: string | null;
=======
  title = 'Crear User';
  id: string | null;
>>>>>>> develop

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _userService: UserService,
              private aRouter: ActivatedRoute) { 
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],
    });

    this.id = this.aRouter.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.editUser();
  }

  addUser() {
<<<<<<< HEAD
    const user: User = {
      id: this.userForm.get('id')?.value,
      name: this.userForm.get('name')?.value,
      age: this.userForm.get('age')?.value,
      password: this.userForm.get('password')?.value,
    }

    if(this.name !== null){
      // Edit user
      this._userService.editUser(this.name, user).subscribe(data => {
        this.toastr.info('El user ha estat editat amb exit!', 'User Editat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
    else {
      // Add user
      console.log(user);
      this._userService.addUser(user).subscribe(data => {
        this.toastr.success('El user ha estat creat amb exit!', 'User Creat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
=======
    //todo convert all user to my user

    console.log(typeof this.userForm.get('birthDate')?.value);

    //@ts-ignore
    const user: User = {
      name: this.userForm.get('name')?.value,
      birthDate: this.userForm.get('birthDate')?.value,
      password: this.userForm.get('password')?.value,
      mail: this.userForm.get('mail')?.value,
      userName: this.userForm.get('username')?.value,
    };

    if (this.id !== null) {
      // Edit user
      this._userService.editUser(this.id, user).subscribe(
        (data) => {
          this.toastr.info('El user ha estat editat amb exit!', 'User Editat');
          this.router.navigate(['/listar-users/']);
        },
        (error) => {
          console.log(error);
          this.userForm.reset();
        }
      );
    } else {
      // Add user
      console.log(user);
      this._userService.addUser(user).subscribe(
        (data) => {
          this.toastr.success('El user ha estat creat amb exit!', 'User Creat');
          this.router.navigate(['/listar-users/']);
        },
        (error) => {
          console.log(error);
          this.userForm.reset();
        }
      );
>>>>>>> develop
    }
  }

  editUser() {
<<<<<<< HEAD
    if(this.name !== null) {
      this.title = 'Editar user';
      this._userService.getUser(this.name).subscribe(data => {
        this.userForm.setValue({
          id: data.id,
          name: data.name,
          age: data.age,
          password: data.password,
        })
      })
=======
    if (this.id !== null) {
      this.title = 'Editar user';
      this._userService.getUser(this.id).subscribe((data) => {
        console.log('Editar user data');
        console.log(data);
        this.userForm.setValue({
          name: data.name,
          username: data.userName,
          birthDate: data.birthDate,
          password: data.password,
          mail: data.mail,
        });
      });
>>>>>>> develop
    }
  }

}
