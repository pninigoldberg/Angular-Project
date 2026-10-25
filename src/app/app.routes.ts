import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Lessons } from './lessons/lessons';
import { Registrations } from './registrations/registrations';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  { path: 'lessons', component: Lessons },

  { path: 'registrations', component: Registrations }
];