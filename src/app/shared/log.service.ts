import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  // TODO: Improvement for centralized logging
  log(message?: any, ...optionalParams: any[]): void {
    console.log(message);
  }

  error(message?: any, ...optionalParams: any[]): void {
    console.error(message);
    // any other logic specific for error
  }
}
