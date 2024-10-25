// src/app/magic-school/magic-school.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicSchoolRoutingModule } from './magic-school.routing.module';
import { MagicSchoolComponent } from './magic-school.component';

@NgModule({
  declarations: [MagicSchoolComponent],
  imports: [CommonModule, MagicSchoolRoutingModule],
})
export class MagicSchoolModule {}
