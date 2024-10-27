// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // Add CommonModule and RouterOutlet here
  template: `<router-outlet></router-outlet>`, // This will load the routed components
  styles: [],
})
export class AppComponent {}
