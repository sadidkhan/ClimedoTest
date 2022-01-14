import { GetArtObjectIdsResponse } from './model/getObjectIdsResponse.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, throwError} from 'rxjs';

import { LogService } from 'src/app/shared/log.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SingleArtDepartmentService {
  constructor(private http: HttpClient, private log: LogService) { }

  getArtObjects(departmentId: number): Observable<GetArtObjectIdsResponse> {
    let params = new HttpParams().append('departmentIds', departmentId);
    return this.http.get(environment.services.getArtObjects.url, {params})
      .pipe(map(response => {
        return (<any>response).data ? (<any>response).data : (<any>response);
      })
      , catchError((httpErrorResponse: HttpErrorResponse) => {
        this.log.error(httpErrorResponse);
        return throwError(() => httpErrorResponse);
      }));
  }
}
