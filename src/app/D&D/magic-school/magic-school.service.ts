import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MagicSchoolService {
  private baseUrl = 'https://www.dnd5eapi.co/api/magic-schools'; // Base URL for all magic schools

  constructor(private http: HttpClient) {}

  // Fetch a magic school by index
  getMagicSchool(index: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${index}`);
  }

  // Fetch all magic schools based on their index values
  getAllMagicSchools(): Observable<any[]> {
    const magicSchoolIndices = [
      'abjuration',
      'conjuration',
      'divination',
      'enchantment',
      'evocation',
      'illusion',
      'necromancy',
      'transmutation',
    ];
    const requests = magicSchoolIndices.map((index) =>
      this.getMagicSchool(index)
    );
    return forkJoin(requests); // Use forkJoin to wait for all requests
  }
}
