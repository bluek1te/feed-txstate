import { Injectable } from '@angular/core';
import { Rescue } from './rescue';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RescueService {
  private rescueSource = new BehaviorSubject<Rescue>({
	location: "empty",
  });

  currentRescue = this.rescueSource.asObservable();
  constructor() { }
  
  changeRescue(rescue: Rescue) {
    this.rescueSource.next(rescue)

  }

}
