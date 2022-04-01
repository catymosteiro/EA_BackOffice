import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventComponent } from './components/crear-event/crear-event.component';
import { CrearBookComponent } from './components/crear-book/crear-book.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ChatCreateComponent } from './components/chat-create/chat-create.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { ListarBookComponent } from './components/listar-book/listar-book.component';
import { ListarEventsComponent } from './components/listar-events/listar-events.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

// Routes
const routes: Routes = [
  { path: '', component: DashBoardComponent },
  { path: 'listar-users', component: ListarUsersComponent },
  { path: 'listar-books', component: ListarBookComponent },
  { path: 'listar-events', component: ListarEventsComponent },
  { path: 'crear-user', component: CrearUserComponent },
  { path: 'editar-user/:id', component: CrearUserComponent },
  { path: 'crear-event', component: CrearEventComponent },
  { path: 'editar-event/:name', component: CrearEventComponent },
  { path: 'crear-book', component: CrearBookComponent },
  { path: 'editar-book/:_id', component: CrearBookComponent },
  { path: 'chat-create', component: ChatCreateComponent },
  { path: 'chat-list/:id', component: ChatListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
