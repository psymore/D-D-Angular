// src/app/app.module.ts (Optional, if you have other modules to include)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; // Import the standalone AppComponent

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // Remove RouterModule as it will be provided in main.ts
  ],
  providers: [HttpClientModule],
  declarations: [
    // No declarations needed for standalone components
  ],
  // bootstrap: [AppComponent], // Removed as we're using bootstrapApplication
})
export class AppModule {}
