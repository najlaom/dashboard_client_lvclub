import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/espace-client/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}
  token: any = '';
  myForm: FormGroup;
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private _router: Router) { 
      this.myForm = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  
      });
    }

  ngOnInit(): void {
  }

  login(email: any, password: any) {
    this.userService.login(email.value, password.value).subscribe(
      (data) => {
        console.log(data)
        if (data) {
          this.user = data
          localStorage.setItem("token", this.user.token);
          console.log(localStorage.getItem("token"))
          localStorage.setItem("email", this.user.user.email);
          console.log('ddddd')
          console.log(localStorage.getItem("email"))
          localStorage.setItem("fullName", this.user.user.fullName);
          localStorage.setItem("firstName", this.user.user.firstName);
          localStorage.setItem("lastName", this.user.user.lastName);
          localStorage.setItem("username", this.user.user.username);
          localStorage.setItem("role", this.user.user.role);
          localStorage.setItem("_id", this.user.user._id);
          console.log(localStorage.getItem("_id"))
          this._router.navigate(['./dashboard']);

        }
        console.log(data)
      },
      error => {
        console.log(error)
      });
  }
 

}
