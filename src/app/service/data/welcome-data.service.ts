import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


export class HelloWorldBean{

  constructor(public msg:string){ }

}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  executeHelloWorldBeanService(){
    console.log("aaaaaaaa")
   return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  
  }

  executeHelloWorldBeanServicePathVariable(name){
    console.log("path")
   return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  
  }

 
}
