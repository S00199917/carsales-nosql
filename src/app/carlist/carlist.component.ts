import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../service/car-api.service';
import { ICar, Car } from '../interfaces/car';

@Component({
    selector: 'app-carlist',
    templateUrl: './carlist.component.html',
    styleUrls: ['./carlist.component.css'],
    providers: [CarApiService]
})

export class CarlistComponent implements OnInit {
    carsData: ICar[];

    show = true;

    constructor(private _carAPIService: CarApiService) { }

    ngOnInit() {
        this._carAPIService.getCarData().subscribe(carsData => { this.carsData = carsData });
    }

    addTheCar(make: string, model: string, year: string, imageURL: string): boolean {
        let tempCar: ICar;
        tempCar = new Car(make, model, year, imageURL, this.carsData.keys.toString());
        this._carAPIService.addCarData(tempCar);
        return false;
    }
}
