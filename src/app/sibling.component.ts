import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data.service";
@Component({
  selector: 'app-sibling',
  template: `
   
    <button (click)="newMessage()">New Message</button>
  `
  
})
export class SiblingComponent implements OnInit {
  message:string;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  newMessage() {
    this.data.changeMessage("Hello from Sibling");
  }
}