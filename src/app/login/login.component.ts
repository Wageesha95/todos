import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName=''
  Password=''
  invalidLogin = false

  constructor(private router : Router, private HardCodedAuthenticationService : HardCodedAuthenticationService) { }

  ngOnInit() {
  ;
  }
  
  handleLogin(){

    //if(this.UserName === "Thilina" && this.Password === '0000') {
      if(this.HardCodedAuthenticationService.authenticate(this.UserName,this.Password)) {
      this.invalidLogin=false
      this.router.navigate(['welcome',this.UserName])
      console.log(this.UserName +"  "+ "LoggedIn..");
    }
    this.invalidLogin=true
  }




}
