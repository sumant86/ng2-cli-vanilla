/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { RestApiService } from './rest-api.service';

describe('RestApi Service', () => {
  beforeEachProviders(() => [RestApiService]);

  it('should ...',
      inject([RestApiService], (service: RestApiService) => {
    expect(service).toBeTruthy();
  }));
});
