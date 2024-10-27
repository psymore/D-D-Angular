// src/app/D&D/magic-school/magic-school-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagicSchoolComponent } from './magic-school.component';

const routes: Routes = [
  { path: '', component: MagicSchoolComponent }, // Default route for magic school
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicSchoolRoutingModule {}
