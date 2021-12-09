import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  email: any = '';
  username: any = '';
  firsname: any = '';
  lastname: any = '';
  idUser: any = '';
  token: any = '';
  role: any = '';
  logo: any = '';
  constructor( private _router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('email'));
    this.email = localStorage.getItem('email');
    this.username = localStorage.getItem('username');
    console.log(localStorage.getItem('username'));
    this.firsname = localStorage.getItem('firstName');
    console.log(localStorage.getItem('firstName'));
    this.lastname = localStorage.getItem('lastName');
    console.log(localStorage.getItem('lastName'));
    this.idUser = localStorage.getItem('_id');
    console.log(localStorage.getItem('_id'));
    this.role = localStorage.getItem('role');
    this.logo = localStorage.getItem('LogoImage');
    console.log(localStorage.getItem('role'));
  }
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }


}
