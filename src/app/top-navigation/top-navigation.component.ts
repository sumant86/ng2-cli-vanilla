import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-top-navigation',
  templateUrl: 'top-navigation.component.html',
  styleUrls: ['top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  brand = 'Ng2CliVanilla';
  constructor() {}

  ngOnInit() {
  }

}
