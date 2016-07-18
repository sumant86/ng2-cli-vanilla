import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-top-navigation',
  templateUrl: 'top-navigation.component.html',
  styleUrls: ['top-navigation.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TopNavigationComponent implements OnInit {
  brand = 'Ng2CliVanilla';
  constructor() {}

  ngOnInit() {
  }

}
