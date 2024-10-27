import { Component, OnInit } from '@angular/core';
import { MagicSchoolService } from './magic-school.service';
import { MagicSchool } from './_model/magic-school.model';

@Component({
  selector: 'app-magic-school',
  templateUrl: './magic-school.component.html',
  styleUrls: ['./magic-school.component.scss'],
})
export class MagicSchoolComponent implements OnInit {
  abjurationSchool: MagicSchool | null = null;

  constructor(private magicSchoolService: MagicSchoolService) {}

  ngOnInit(): void {
    this.fetchAbjurationSchool();
  }

  fetchAbjurationSchool(): void {
    this.magicSchoolService.getAbjurationSchool().subscribe(
      (data) => {
        this.abjurationSchool = data;
      },
      (error) => {
        console.error('Error fetching Abjuration magic school:', error);
      }
    );
  }
}
