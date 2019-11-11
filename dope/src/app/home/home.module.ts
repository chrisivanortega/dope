import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HomePage } from './home.page';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      percent:100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#f25454",
      innerStrokeColor: "inner",
      animationDuration: 500,      
      animation:false,
      responsive:true,
      renderOnClick:false,
      lazy: false  
      
    })
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
