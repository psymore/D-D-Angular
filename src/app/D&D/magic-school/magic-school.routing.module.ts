// src/app/magic-school/magic-school-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagicSchoolComponent } from './magic-school.component';

const routes: Routes = [{ path: '', component: MagicSchoolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicSchoolRoutingModule {}
