import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName=''
  Password=''
  invalidLogin = false

  constructor(private router : Router) { }

  ngOnInit() {
  ;
  }
  
  handleLogin(){

    if(this.UserName === "Thilina" && this.Password === '0000') {
      this.invalidLogin=false
      this.router.navigate(['welcome',this.UserName])
      console.log(this.UserName +"  "+ "LoggedIn..");
    }
    this.invalidLogin=true
  }




}
