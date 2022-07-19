import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggle:boolean;
 // @Output() informParent = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  userProfileClick() {
    this.router.navigate(['/user-profile']);
  }

  // toggler() {
  //   this.toggleSidenav.emit();
  //   setTimeout(() => {
  //     window.dispatchEvent(new Event('resize'));
  //   }, 200);
  // }

  toggleMenu(){
    this.toggle = !this.toggle;
  }

  logout() {
    this.router.navigate([""]);
    localStorage.clear();
  }
}
