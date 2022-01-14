import { map, retry } from 'rxjs';
import { ArtObjectService } from './art-object.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-art-object',
  templateUrl: './art-object.component.html',
  styleUrls: ['./art-object.component.scss']
})
export class ArtObjectComponent implements OnInit {

  @Input() artObjectd: number | undefined;
  @Output() addArtObjectEvent = new EventEmitter<any>(); 
  constructor(private artObjectService: ArtObjectService) { }

  ngOnInit(): void {
    if(this.artObjectd){
      this.artObjectService.getArtObjects(this.artObjectd)
      .subscribe((response: any) => {
        this.addArtObjectToDepartmentArtList(response);
      })
    }
  }

  addArtObjectToDepartmentArtList(value: string) {
    this.addArtObjectEvent.emit(value);
  }

}
