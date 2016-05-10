import { Component } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { DashboardComponent } from './demo/dashboard.component';

@Routes([
  {path:'/dashboard', component:DashboardComponent}
])

@Component({
  moduleId: module.id,
  directives:[ROUTER_DIRECTIVES],
  selector: 'angular-2-router-poc-app',
  templateUrl: 'angular-2-router-poc.component.html',
  styleUrls: ['angular-2-router-poc.component.css']
})
export class Angular2RouterPocAppComponent {
  title = 'angular-2-router poc';
  
  constructor(private router:Router){
  }
  
  ngOnInit(){
    this.router.navigate(['dashboard/friends']);    
  }
  
}
