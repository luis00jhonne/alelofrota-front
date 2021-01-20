import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle.model';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    const page = 0;
    const limit = 10;
    this.vehicleService.getVehicles(page, limit)
      .subscribe(vehicles => this.vehicles = vehicles);
  }

  addVehicle(): void {    
  }

  deleteVehicle(vehicle: Vehicle): void{

  }

}
