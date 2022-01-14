import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private searchQueryStateSource = new BehaviorSubject<any>(null);

  searchQueryStateChanged = this.searchQueryStateSource.asObservable();

  search(searchQuery: any) {
    this.searchQueryStateSource.next(searchQuery);
  }

}
