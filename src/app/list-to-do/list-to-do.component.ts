import { Component, OnInit } from '@angular/core';

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



  Todo = [
   new Todo (1,'Learn Angular',false, new Date()),
    new Todo (2,'Learn Spring',true, new Date()),
   new Todo (3,'Learn Laraval..........',false, new Date())

 ]

 
  // todo = {
  //   id : 1,
  //   description :'Learn Angular'

  // }




  constructor() { }

  ngOnInit() {
  }



}