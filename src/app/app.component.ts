import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public toggle: boolean = false;
  public isAuthenticated:any;
  public toggleMenu:boolean = localStorage.getItem("sidebar") != null ? JSON.parse(localStorage.getItem("sidebar")).value : true;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("isAuthenticated")) {
      this.isAuthenticated = localStorage?.getItem("isAuthenticated");
    };
  }

  parentWillTakeAction(_value:any){
    this.toggle = _value;
  }
}
