import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Vehicle } from '../model/vehicle.model';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private location: Location) { }

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id !== null && id > 0){
      this.vehicleService.getVehicleById(id)
        .subscribe(vehicle => this.vehicle = vehicle);
    } else {
      this.vehicle = new Vehicle();
    }
  }

  save(): void {
    if (this.vehicle.id == null || this.vehicle.id == 0){
      this.vehicleService.addVehicle(this.vehicle)
        .subscribe(() => this.goBack());
    } else {
      this.vehicleService.updateVehicle(this.vehicle)
      .subscribe(() => this.goBack());
    }
    
  }

  goBack(): void {
    this.location.back();
  }

}
