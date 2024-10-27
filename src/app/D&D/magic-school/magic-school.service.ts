import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MagicSchool } from './_model/magic-school.model';

@Injectable({
  providedIn: 'root',
})
export class MagicSchoolService {
  private apiUrl = 'https://www.dnd5eapi.co/api/magic-schools/abjuration';

  constructor(private http: HttpClient) {}

  getAbjurationSchool(): Observable<MagicSchool> {
    return this.http.get<MagicSchool>(this.apiUrl);
  }
}
