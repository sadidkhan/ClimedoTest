import { ArtDepartmentsService } from './shared/art-departments.service';
import { Component, OnInit } from '@angular/core';
import { Department, GetDepartmentResponse } from './shared/model/department.model';

@Component({
    selector: 'app-art-departments',
    templateUrl: './art-departments.component.html',
    styleUrls: ['./art-departments.component.scss']
})
export class ArtDepartmentsComponent implements OnInit {
    departments: Array<Department> = [];
    constructor(private artDepartmentService: ArtDepartmentsService) { }

    ngOnInit(): void {
        this.artDepartmentService.getDepartments()
        .subscribe((response: GetDepartmentResponse) => {
            this.departments = response.departments;
        });
    }

}
