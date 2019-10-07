import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

authenticate(userName,password){

  console.log( "before :" + this.isUserLogedIn());
  if(userName === "Thilina" && password === '0000'){
    sessionStorage.setItem('authentic ateUser',userName)
    console.log("after :" + this.isUserLogedIn());
    return true
  }
  return false
  
}

isUserLogedIn(){
  let user = sessionStorage.getItem('authenticateUser')
  return !(user===null)
}

logout(){
  sessionStorage.removeItem('authenticateUser');

}

}

