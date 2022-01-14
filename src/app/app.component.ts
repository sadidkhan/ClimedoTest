import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from './shared/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appService: AppService){}
  title = 'climedoTest';
  searchQuery = new FormControl('');
  search(){
    this.appService.search(this.searchQuery.value);
  }
}
