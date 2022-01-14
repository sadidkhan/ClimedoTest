import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private searchQueryStateSource = new ReplaySubject<any>(1);

  searchQueryStateChanged = this.searchQueryStateSource.asObservable();

  search(searchQuery: any) {
    this.searchQueryStateSource.next(searchQuery);
  }

}
