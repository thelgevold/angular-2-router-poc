import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  moduleId: module.id,
  template:`
  <h3>Friends</h3>
  <div *ngFor="let friend of friends | async">
    {{friend.firstName}}
  </div>
  `        
})
export class FriendsComponent implements OnInit{
  
  friends;
  
  constructor(private http:Http){
  }
  
  ngOnInit(){
    this.friends = this.http
                       .get('./app/demo/friends.json')
                       .map((res:Response) => res.json());
  }
}