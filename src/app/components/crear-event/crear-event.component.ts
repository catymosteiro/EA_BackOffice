import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-crear-event',
  templateUrl: './crear-event.component.html',
  styleUrls: ['./crear-event.component.css']
})
export class CrearEventComponent implements OnInit {
  eventForm: FormGroup;
  title = "Crear Event";
  name: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _eventService: EventService,
              private aRouter: ActivatedRoute) { 
    this.eventForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      place: ['', Validators.required],
      eventDate: ['', Validators.required],
    });
    
    this.name = this.aRouter.snapshot.paramMap.get('name');
    console.log(this.name);
  }

  ngOnInit(): void {
    this.editEvent();
  }

  addEvent() {
    const event: Event = {
      name:this.eventForm.get('name')?.value,
      description:this.eventForm.get('description')?.value,
      admin:this.eventForm.get('admin')?.value,
      creationDate:this.eventForm.get('creationDate')?.value,
      usersList:this.eventForm.get('userList')?.value,
      category: this.eventForm.get('category')?.value,
      position:this.eventForm.get('position')?.value,
    }

    if(this.name !== null){
      // Edit user
      this._eventService.editEvent(this.name, event).subscribe(data => {
        this.toastr.info('Event ha estat editat amb exit!', 'Event Editat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.eventForm.reset();
      })
    }
    else {
      // Add user
      console.log(event);
      this._eventService.addEvent(event).subscribe(data => {
        this.toastr.success('Event ha estat creat amb exit!', 'Event Creat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.eventForm.reset();
      })
    }
  }

  editEvent() {
    if(this.name !== null) {
      this.title = 'Editar event';
      this._eventService.getEvent(this.name).subscribe(data => {
        this.eventForm.setValue({
          name: data.name,
          description: data.description,
          admin: data.admin,
          creationDate: data.creationDate,
          usersList: data.usersList,
          category: data.category,
          position: data.position,
        })
      })
    }
  }

}
