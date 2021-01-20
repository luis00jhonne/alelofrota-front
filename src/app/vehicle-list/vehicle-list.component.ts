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

  addVehicle(vehicle : Vehicle): void {    
    this.vehicleService.addVehicle(vehicle)
      .subscribe(vehicle => { this.vehicles.push(vehicle);
    });
  }

  deleteVehicle(vehicle: Vehicle): void{
    if (window.confirm('Do yout want to delete this vehicle?')){
      this.vehicleService.deleteVehicle(vehicle).subscribe(
        () => this.getVehicles()
      );
    }    
  }

}
