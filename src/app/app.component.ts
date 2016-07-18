import { Component } from '@angular/core';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TopNavigationComponent]
})
export class AppComponent {
  title = 'app works!';
}
