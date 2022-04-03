import { Component, OnInit, ViewChild } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Events } from 'src/app/models/event';
import { EventService } from 'src/app/service/event.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-listar-events',
  templateUrl: './listar-events.component.html',
  styleUrls: ['./listar-events.component.css']
})
export class ListarEventsComponent implements OnInit {
  listEvents: Events[] = [];
  dataSource = new MatTableDataSource(this.listEvents);
  displayedColumns: string[] = [
    '_id',
    'name',
    'description',
    'admin',
    'creationDate',
    'usersList',
    'category',
    'position',
    'actions',
  ];

  constructor(private _eventService: EventService,
        private toastr: ToastrService) { }
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this._eventService.getEvents().subscribe(data => {
      console.log(data);
      this.listEvents = data;
      this.dataSource = new MatTableDataSource(this.listEvents);
    }, error => {
      console.log(error);
    })
  }

  deleteEvent(name: string) {
    this._eventService.deleteEvent(name).subscribe(data => {
      this.toastr.error('Event ha estat eliminat amb exit', 'Event eliminat');
      this.getEvents();
    }, error => {
      console.log(error);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}