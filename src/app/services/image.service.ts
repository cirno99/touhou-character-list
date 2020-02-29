import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private resource = 'assets/data/touhouImage.json';
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get(this.resource).pipe(map(res => res));
  }
}
