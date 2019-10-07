import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  Msg = 'Some Welcome Message'
  name= ''
  welcomeMessageFromService: string;

  constructor(private route : ActivatedRoute, private service : WelcomeDataService) { }

  ngOnInit() {

    console.log(this.Msg)
    this.name = this.route.snapshot.params['name']

  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      
          responsedata => this.handleSuccessfulResponse(responsedata),
          errordata => this.handleErrorResponse(errordata)
          
          );
    
          console.log("last line")

  }
  handleErrorResponse (error){
    console.log(error.error.msg)
    this.welcomeMessageFromService = error.error.msg;
    ;
  }


  handleSuccessfulResponse(response){
    
    this.welcomeMessageFromService = response.msg;

    //console.log(response);
    //console.log(response.msg);
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldBeanServicePathVariable(this.name).subscribe(
      
          responsedata => this.handleSuccessfulResponse(responsedata),
          errordata => this.handleErrorResponse(errordata)
          
          );
     
          console.log("last line")


    }
  
   }
