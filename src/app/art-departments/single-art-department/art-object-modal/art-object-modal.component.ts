import { BasicArtObject } from './../art-object/model/artObject.model';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-art-object-modal',
  templateUrl: './art-object-modal.component.html',
  styleUrls: ['./art-object-modal.component.scss']
})
export class ArtObjectModalComponent implements OnInit {

  @Input() artObject: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.artObject);
  }

}
