import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  percent:number = 0;
  radius:number = 100;
  progress:any = 0;
  inner:any = "#f04141";
  color:any = 'success'
  constructor(private http: HttpClient) {
    
  }



  ngOnInit(){
    
    setInterval(function(){ this.checkav();}.bind(this), 1000);



  }


  checkav(){

    this.http.get('http://192.168.100.57:81/readState').subscribe((response) => {
      
      this.color = "success";
    },
    (err)=>{
      this.color = "danger";

    }

    
    );

  }

  openDoor(){
    this.color = "tertiary"  
    this.http.get('http://192.168.100.57:81/toggleGPIO').subscribe((response) => {    
      this.color = "success"
    });

  }


}
