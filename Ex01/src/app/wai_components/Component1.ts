import { Component } from "@angular/core";

@Component({
    selector: 'first-component',
    templateUrl: './component1.html'
})

export class Component1 {
    name = "Wai Technologies..";
    cityAdd: string = '';
    pinAdd: number = 0;
    countryAdd: string = '';

    // address = new class Address {
    //     pin: number = 1234;
    //     country: string = 'india';
    //     state: string = 'MH'
    // }

    //address: Address = new Address("Nagar", 414002, "Bharat");

    //addr: Address = new Address();
    addr: Address = new Address('nagar', 1234, 'IND');

    // setCity(event: any) {
    //     console.log(event);
    //     this.addr.city = event.target.value;
    // }

    // setPin(event: any) {
    //     this.addr.pin = event.target.value;
    // }

    // setCountry(event: any) {
    //     this.addr.country = event.target.value;
    // }

    // names: Array<string> = ['ram', 'raj', 'rahul', 'raman', 'prasad']

    // address: Array<Address> = [
    //     new Address('nagar', 1234, 'IND'),
    //     new Address('nagar', 1234, 'IND'),
    //     new Address('nagar', 1234, 'IND'),
    //     new Address('nagar', 1234, 'IND'),
    // ]

    setCity(city: string) {
        this.cityAdd = city;
        console.log(this.cityAdd)
        console.log(city)
    }
}

class Address {
    private _city!: string;
    private _pin!: number;
    private _country!: string;

    constructor(city: string, pin: number, country: string) {
        this._city = city;
        this._pin = pin;
        this._country = country
    }

    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }

    public get pin(): number {
        return this._pin;
    }
    public set pin(value: number) {
        this._pin = value;
    }

    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
}