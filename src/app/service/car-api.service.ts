import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";

import { ICar } from "../interfaces/car";
import { jsDocComment } from '@angular/compiler';

@Injectable()

export class CarApiService {
    carsDataCollection: AngularFirestoreCollection<ICar>;

    carsData: Observable<ICar[]>;

    allCarsData: ICar[];

    errorMessage: string;

    constructor(private _http: HttpClient, private _afs: AngularFirestore) {
        this.carsDataCollection = _afs.collection<ICar>("cars_data");
    }

    getCarData(): Observable<ICar[]> {
        this.carsData = this.carsDataCollection.valueChanges({ idField: "id" });

        this.carsData.subscribe(
            data => console.log("getCarsData:" + JSON.stringify(data))
        )
        return this.carsData;
    }

    addCarData(car: ICar): void {
        this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
    }

    delCarData(carId: string): void {
        this.carsDataCollection.doc(carId).delete();
    }

    private handleError(err: HttpErrorResponse) {
        console.log("CarApiService: " + err.message);
        return Observable.throw(err.message);
    }
}
