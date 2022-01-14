import { BasicArtObject } from './art-object/model/artObject.model';
import { GetArtObjectIdsResponse } from './model/getObjectIdsResponse.model';
import { SingleArtDepartmentService } from './single-art-department.service';
import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../shared/model/department.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtObjectModalComponent } from './art-object-modal/art-object-modal.component';

@Component({
  selector: 'app-single-art-department',
  templateUrl: './single-art-department.component.html',
  styleUrls: ['./single-art-department.component.scss']
})
export class SingleArtDepartmentComponent implements OnInit {

  @Input()
  department!: Department;
  artObjectIds: Array<number> = [];
  products: any;
  responsiveOptions: any;
  constructor(private singleDepartmentService: SingleArtDepartmentService, private modalService: NgbModal) {
    this.products = [];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.singleDepartmentService.getArtObjects(this.department.departmentId)
      .subscribe((artObjectIds: GetArtObjectIdsResponse) => {
        this.artObjectIds = artObjectIds.objectIDs.slice(0,100); 
        //TODO: dataset is too large. slice items for simplicity 
      })
  }

  insertToList(artObject: any): void {
    this.products.push(artObject);
    console.log(this.products);
    this.products = [...this.products];
  }

  openModal(artObject: BasicArtObject){
    const modalRef = this.modalService.open(ArtObjectModalComponent);
    modalRef.componentInstance.artObject = artObject;
  }
}
