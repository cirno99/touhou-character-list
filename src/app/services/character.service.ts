import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../core/model/character';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private resource = 'assets/data/characters.json';
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(this.resource).pipe(map(res => res));
  }
  getCharacterByName(name: string) {
    return Observable.create((observer: Observer<Character[]>) => {
      this.getCharacters().subscribe((data: Character[]) => {
        const character = data.filter(
          (ch: Character) => ch.name[2] === name
        );
        console.log(character);
        observer.next(character);
        observer.complete();
      });
    });
  }
}
