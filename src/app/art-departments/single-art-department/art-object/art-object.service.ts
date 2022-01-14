import { BasicArtObject } from './model/artObject.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, throwError} from 'rxjs';

import { LogService } from 'src/app/shared/log.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtObjectService {
  constructor(private http: HttpClient, private log: LogService) { }

  getArtObjects(artObjectId: number): Observable<any> {
    let url = `${environment.services.getArtObjects.url}/${artObjectId}`;
    return this.http.get(url)
      .pipe(map(response => {
        return (<any>response).data ? (<any>response).data : (<any>response);
      })
      , catchError((httpErrorResponse: HttpErrorResponse) => {
        this.log.error(httpErrorResponse);
        return throwError(() => httpErrorResponse);
      }));
  }

  processList(response: any): Array<BasicArtObject>{
    let objectList = response.map((item:any) => {
      return new BasicArtObject(item);
    });
    return objectList;
  }
}
