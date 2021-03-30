import { stringify } from "querystring";

export interface ICar {
    make: string;
    model: string;
    year: string;
    imageURL: string;
    id:string;
}

export class Car {
    make: string;
    model: string;
    year: string;
    imageURL: string;
    id:string;

    constructor(make: string, model: string, year: string, imageURL: string, id:string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.imageURL = imageURL;
        this.id = id;
    }
}
