import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Angular Material components
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Components
import { AppComponent } from './app.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { ListarEventsComponent } from './components/listar-events/listar-events.component';
import { CrearEventComponent } from './components/crear-event/crear-event.component';
import { ListarTodoComponent } from './components/listar-todo/listar-todo.component';
import { CrearBookComponent } from './components/crear-book/crear-book.component';
import { ListarBookComponent } from './components/listar-book/listar-book.component';
import { ChatCreateComponent } from './components/chat-create/chat-create.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUserComponent,
    ListarUsersComponent,
    ListarEventsComponent,
    CrearEventComponent,
    ListarTodoComponent,
    CrearBookComponent,
    ListarBookComponent,
    ChatCreateComponent,
    ChatListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
