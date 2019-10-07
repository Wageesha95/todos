import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{

  constructor(

    public id : number,
    public description : string,
    public done  : boolean,
    public targetDate : Date
   )

   {

   }

}



@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})








export class ListToDoComponent implements OnInit {



  Todo : Todo[]
  message : String
//   [
//    new Todo (1,'Learn Angular',false, new Date()),
//     new Todo (2,'Learn Spring',true, new Date()),
//    new Todo (3,'Learn Laraval',false, new Date())

//  ]

 
  // todo = {
  //   id : 1,
  //   description :'Learn Angular'

  // }




  constructor(private todoservice:TodoDataService,
              private router :Router
              ) { }

  ngOnInit() {
   this.refreshToDos();
  }

  


  deleteTodo(id){

    //console.log(`delete item no ${id} todo.ts`) 
    this.todoservice.deleteTodo('Bandara',id).subscribe(
      response=>{
        console.log(response)
        this.message= `Item No : ${id} Deleted Successfully !`
        this.refreshToDos();
        }
    )}
    



refreshToDos(){
this.todoservice.retriveAllTodos('thusitha').subscribe(
  response => {
    console.log(response);
    this.Todo = response;
})

}


updateTodoId(id){
  this.router.navigate(['todos',id])
  //console.log(`update ${id}`)
}






}