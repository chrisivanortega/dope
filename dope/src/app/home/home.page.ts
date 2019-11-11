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

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(){
    this.http.get('http://192.168.100.57:81/readState').subscribe((response) => {
      
      this.inner = "#10dc60";
    },
    (err)=>{
      this.inner = "#f04141";
    }

    
    );

  }
  openDoor(){
    
    
    this.http.get('http://192.168.100.57:81/toggleGPIO').subscribe((response) => {
    
      this.percent = 100
    });

  }


}
