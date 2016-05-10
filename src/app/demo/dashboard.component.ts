import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { FriendsComponent } from './friends.component';
import { GreetingComponent } from './greeting.component';

@Routes([
  {path:'/friends', component:FriendsComponent},
  {path:'/greeting', component:GreetingComponent}
])

@Component({
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  template:`
    <nav>
      <a [routerLink]="['/dashboard','friends']">Friends</a>  
      <a [routerLink]="['/dashboard','greeting']">Greeting</a> 
    </nav>
    <router-outlet></router-outlet>
  `        
})
export class DashboardComponent{
}