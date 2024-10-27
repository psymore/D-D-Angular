// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'magic-school',
    loadChildren: () =>
      import('./D&D/magic-school/magic-school.module').then(
        (m) => m.MagicSchoolModule
      ),
  },
  { path: '', redirectTo: '/magic-school', pathMatch: 'full' }, // Default route
];
