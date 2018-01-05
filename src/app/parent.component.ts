import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data.service";
@Component({
  selector: 'app-parent',
  template: `
    {{message}}
    <button (click)="newMessage()">Parent Message</button>
  `
})
export class ParentComponent implements OnInit {
  message:string;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  newMessage(){
    this.data.changeMessage("Hello from Parent");
  }
}