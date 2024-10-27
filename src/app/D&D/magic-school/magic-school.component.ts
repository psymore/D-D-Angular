import { Component, OnInit } from '@angular/core';
import { MagicSchoolService } from './magic-school.service';

@Component({
  selector: 'app-magic-school',
  templateUrl: './magic-school.component.html',
  styleUrls: ['./magic-school.component.scss'],
})
export class MagicSchoolComponent implements OnInit {
  magicSchools: any[] = []; // Array to hold all magic schools

  constructor(private magicSchoolService: MagicSchoolService) {}

  ngOnInit(): void {
    this.fetchAllMagicSchools(); // Fetch data on component load
  }

  fetchAllMagicSchools(): void {
    this.magicSchoolService.getAllMagicSchools().subscribe(
      (data) => {
        this.magicSchools = data; // Store the fetched magic school data
      },
      (error) => {
        console.error('Error fetching magic schools:', error);
      }
    );
  }
}
