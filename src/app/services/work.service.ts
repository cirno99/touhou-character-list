import { Injectable } from '@angular/core';
import { Work } from '../core/model/work';
import { Observer , Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private resource = 'assets/data/works.json';
  constructor(private http: HttpClient) {}

  getWorks() {
    return this.http.get(this.resource).pipe(map(res => res));
  }

  getWorkByName(name: string) {
    return Observable.create((observer: Observer<Work[]>) => {
      this.getWorks().subscribe((data: Work[]) => {
        const work = data.filter((wo: Work) => wo.name === name);
        console.log(work);
        observer.next(work);
        observer.complete();
      });
    });
  }
}
