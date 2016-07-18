/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TopNavigationComponent } from './top-navigation.component';

describe('Component: TopNavigation', () => {
  it('should create an instance', () => {
    let component = new TopNavigationComponent();
    expect(component).toBeTruthy();
  });
});
