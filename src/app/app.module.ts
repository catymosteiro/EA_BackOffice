import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Angular Material components
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { ListarEventsComponent } from './components/listar-events/listar-events.component';
import { CrearEventComponent } from './components/crear-event/crear-event.component';
import { CrearBookComponent } from './components/crear-book/crear-book.component';
import { ListarBookComponent } from './components/listar-book/listar-book.component';
import { ChatCreateComponent } from './components/chat-create/chat-create.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginComponent } from './components/login/login.component';

// Providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ListarClubsComponent } from './components/listar-clubs/listar-clubs.component';
import { InfoClubComponent } from './components/info-club/info-club.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearUserComponent,
    ListarUsersComponent,
    ListarEventsComponent,
    CrearEventComponent,
    CrearBookComponent,
    ListarBookComponent,
    ChatCreateComponent,
    ChatListComponent,
    DashBoardComponent,
    LoginComponent,
    ListarClubsComponent,
    InfoClubComponent,
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
    MatPaginatorModule,
    MatTabsModule,
    FormsModule,
    MatStepperModule,
    MatCardModule,
  ],
  providers: [
    // JWT
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    // Token interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
