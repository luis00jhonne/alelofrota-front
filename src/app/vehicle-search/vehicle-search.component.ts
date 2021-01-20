import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Vehicle } from '../model/vehicle.model';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.scss']
})
export class VehicleSearchComponent implements OnInit {

  vehicles$: Observable<Vehicle[]>;
  private searchTerms = new Subject<string>();

  constructor(private vehicleService: VehicleService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.vehicles$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.vehicleService.searchVehicleByPlate(term)),
    );
  }

}
