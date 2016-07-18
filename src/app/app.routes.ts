import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { LoginRoutes } from './login/login.routes';

const routes: RouterConfig = [
    ...DashboardRoutes,
  ...LoginRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];