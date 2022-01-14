import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, throwError} from 'rxjs';

import { LogService } from 'src/app/shared/log.service';
import { environment } from 'src/environments/environment';
import { GetDepartmentResponse } from './model/department.model';


@Injectable({
  providedIn: 'root'
})
export class ArtDepartmentsService {

  constructor(private http: HttpClient, private log: LogService) { }

  getDepartments(): Observable<GetDepartmentResponse> {
    return this.http.get(environment.services.getDepartments.url)
      .pipe(map(response => {
        return (<any>response).data ? (<any>response).data : (<any>response);
      })
      , catchError((httpErrorResponse: HttpErrorResponse) => {
        this.log.error(httpErrorResponse);
        return throwError(() => httpErrorResponse);
      }));
  }

}
