import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from 'rxjs';
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";


import { Rescue } from './rescue';


@Injectable({
  providedIn: 'root'
})
export class RescueService {
  private rescueSource = new BehaviorSubject<Rescue>({
	location: "empty",
  });

  currentRescue = this.rescueSource.asObservable();
  constructor(private http: HttpClient ) { }
  options = {headers : {'Content-Type' : 'application/json'}};

  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
 }

  changeRescue(rescue: Rescue) {
    this.rescueSource.next(rescue)
  }

  getRescueLocation(): Observable<any> {
    return this.http
    .get("http://localhost:8080/api/rescues/1")
    .catch(RescueService._handleError);
  }

}
