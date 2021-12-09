import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes/employes.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  successMessage = '';
  user: any = {}
  myForm: FormGroup;
  rolesEmploye: any = ["Serveur", "Caissier"]
  roleEmploye: string = "Serveur";
  constructor(private empService: EmployesService,
    private _router: Router,
    private fb: FormBuilder) { 
      this.myForm = this.fb.group({    
        firstName :  new FormControl('', [Validators.required]),
        lastName :  new FormControl('', [Validators.required]),
        email :  new FormControl('', [Validators.required, Validators.email]),
        username :  new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        role :  new FormControl('', Validators.required),
      })
    }

  ngOnInit(): void {
  }
  selectRoleEmploye(e: any) {

    this.rolesEmploye = e.target.value
    // console.log("this.typeProduct")
    console.log(this.rolesEmploye)
  }

  registerEmploye(firstName: any, lastName: any, email: any, username: any, password: any) {

    this.empService.addEmploye(firstName.value, lastName.value, email.value, username.value, password.value,this.rolesEmploye).subscribe(
      (data) => {
      console.log(data)
      this.user = data
      localStorage.setItem("token", this.user.token)
      localStorage.setItem("email", this.user.employe.email)
      console.log(localStorage.getItem("email"))
      console.log( localStorage.setItem("username", this.user.employe.username))
      localStorage.setItem("firstName", this.user.employe.firstName)
      localStorage.setItem("lastName", this.user.employe.lastName)
      localStorage.setItem("role", this.user.employe.role)
      this._router.navigate(['./users']);
      
    },
    error => {
        console.log(error)
    });
  }


}
