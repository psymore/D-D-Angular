// src/app/D&D/magic-school/magic-school.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicSchoolComponent } from './magic-school.component';
import { MagicSchoolRoutingModule } from './magic-school.routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MagicSchoolComponent],
  imports: [CommonModule, MagicSchoolRoutingModule, HttpClientModule],
  exports: [MagicSchoolComponent],
  providers: [HttpClientModule],
})
export class MagicSchoolModule {}
