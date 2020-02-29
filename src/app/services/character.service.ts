import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private resource = 'assets/data/characters.json';
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(this.resource).pipe(map((res) => res));
  }

}
