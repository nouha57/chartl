import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //to become able to open and close the side bar 
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  //Emitting the event 
  toggleSideBar(){
     this.toggleSideBarForMe.emit()
  } 
}
