import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

errorMsg = 'Some Error Occured..! Contact Support : 077*******'

  constructor(route : Router) { }

  ngOnInit() {
  }

}
