import { Routes } from '@angular/router';
import { Body } from './body/body';

const loadWorkspacePage = () => import('./workspace-page/workspace-page').then((module) => module.WorkspacePage);

export const routes: Routes = [
  { path: '', component: Body },
  { path: 'overview', loadComponent: loadWorkspacePage, data: { section: 'overview' } },
  { path: 'schedule', loadComponent: loadWorkspacePage, data: { section: 'schedule' } },
  { path: 'messages', loadComponent: loadWorkspacePage, data: { section: 'messages' } },
  { path: 'transactions', loadComponent: loadWorkspacePage, data: { section: 'transactions' } },
  {
    path: 'patients/:patientName',
    loadComponent: () => import('./patient-page/patient-page').then((module) => module.PatientPage),
  },
  { path: '**', redirectTo: '' },
];
