// src/app/magic-school/magic-school.component.ts
import { Component, OnInit } from '@angular/core';
import { MagicSchoolService } from './magic-school.service';
import { MagicSchool } from './_model/magic-school.model';

@Component({
  selector: 'app-magic-school',
  templateUrl: './magic-school.component.html',
  styleUrls: ['./magic-school.component.scss'],
})
export class MagicSchoolComponent implements OnInit {
  magicSchool: MagicSchool | undefined;

  constructor(private magicSchoolService: MagicSchoolService) {}

  ngOnInit(): void {
    this.fetchMagicSchool('abjuration'); // Fetching 'abjuration' as an example
  }

  fetchMagicSchool(index: string): void {
    this.magicSchoolService.getMagicSchool(index).subscribe((data) => {
      this.magicSchool = data;
    });
  }
}
