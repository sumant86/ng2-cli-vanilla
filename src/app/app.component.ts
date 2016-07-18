import { Component } from '@angular/core';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TopNavigationComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
