import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSingin } from '../models/auth';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    url = 'http://localhost:3000/auth';

    constructor(
        private http: HttpClient,
        private jwtHelperService: JwtHelperService) { }

    signin(user: UserSingin): Observable<Object> {
        return this.http.post<Object>(this.url + '/singin/', user);
    }

    isAuth(): boolean {
        const token: any = localStorage.getItem('token');
        if (this.jwtHelperService.isTokenExpired(token) || !localStorage.getItem('token')) {
            return false;
        }
        return true;
    }

}
