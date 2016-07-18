import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { RestApiService } from '../rest-api.service'
import { User } from '../user';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [ RestApiService]
})
export class LoginComponent implements OnInit {
  users: User[];
  constructor(private _router: Router, private _restApiService: RestApiService) {}

  ngOnInit() {
    this._restApiService.getUsers()
        .subscribe(
            users => this.users = users
        );
  }
  login (userSelected){
    let logUser = this.users.find(user => user.id === userSelected);
    this._router.navigate(['/dashboard']);
  }
}
