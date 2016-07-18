import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { RestApiService } from './app/rest-api.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [appRouterProviders, HTTP_PROVIDERS, RestApiService]);

