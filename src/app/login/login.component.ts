import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  dashboardNav (){
      this.router.navigate(['/dashboard']);
  }
}
