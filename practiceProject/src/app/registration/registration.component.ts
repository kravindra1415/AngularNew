import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  states: State[] = [
    new State(1, 'Maharashtra'),
    new State(2, 'Karnataka'),
    new State(3, 'UP')
  ]

  cities:City[]=[
    new City(1,'Nagar'),
    new City(2,"Bangolore"),
    new City(3,'Noida')
  ]
}

class State {
  id: number;
  state: string;

  constructor(id: number, state: string) {
    this.id = id;
    this.state = state
  }
}

class City{
  id:number;
  city:string;

  constructor(id:number,city:string){
    this.id=id;
    this.city=city;
  }
}