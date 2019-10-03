import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-to-do/list-to-do.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  retriveAllTodos(username){
    //console.log("aaaaaaaa")
   return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  
  }

  deleteTodo(username,id){
    //console.log(`delete item no ${id} service.ts`)
    return this.http.delete<Todo[]>(`http://localhost:8080/users/${username}/todos/${id}`);

        }
 
  retrieveTodo(username,id){
   //console.log(`delete item no ${id} service.ts`)
  return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
      
              }


}
