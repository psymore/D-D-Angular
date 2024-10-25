// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MagicSchoolModule } from './D&D/magic-school/magic-school.module';

const routes: Routes = [
  {
    path: 'magic-school',
    loadChildren: () =>
      import('./D&D/magic-school/magic-school.module').then(
        (m) => m.MagicSchoolModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MagicSchoolModule,
  ],
  // bootstrap: [AppComponent]
})
export class AppModule {}
