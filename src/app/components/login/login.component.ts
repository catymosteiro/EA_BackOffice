import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserSignin, UserSignup } from 'src/app/models/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _authService: AuthService
  ) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.formGroup1 = this.fb.group({
      username: ['', Validators.required],
      mail: ['', Validators.required]
    });
    this.formGroup2 = this.fb.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
    this.formGroup3 = this.fb.group({
      password: ['', Validators.required],
      confirmPsw: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    const user: UserSignin = {
      password: this.signInForm.get('password')?.value,
      userName: this.signInForm.get('username')?.value,
    };
    this._authService.signin(user).subscribe(
      (data: any) => {
        this.toastr.info('Dale wey!', 'Signin');
        localStorage.setItem('token', data.token);
        console.log(data);
        this.router.navigate(['/home/']);
      },
      (error) => {
        console.log(error);
        this.signInForm.reset();
      }
    );
  }

  register() {
    const user: UserSignup = {
      userName: this.formGroup1.get('username')?.value,
      mail: this.formGroup1.get('mail')?.value,
      name: this.formGroup2.get('name')?.value,
      birthDate: this.formGroup2.get('birthDate')?.value,
      password: this.formGroup3.get('password')?.value,
    };
    console.log(user);
    this._authService.signup(user).subscribe(
      (data: any) => {
        this.toastr.info('Dale wey!', 'Signin');
        localStorage.setItem('token', data.token);
        console.log(data);
        this.router.navigate(['/home/']);
      },
      (error) => {
        console.log(error);
        this.signInForm.reset();
      }
    );
  }



}
