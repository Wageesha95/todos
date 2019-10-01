import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

authenticate(userName,password){
  if(userName === "Thilina" && password === '0000'){
    return true
  }
  return false
}

}
