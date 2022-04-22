import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  templateUrl: './switch-demo.component.html',
  styleUrls: ['./switch-demo.component.css']
})
export class SwitchDemoComponent implements OnInit {

  people!: Array<any>;
  peopleByCity!: Array<any>;

  constructor() {
    this.people = [{ name: 'Raj', age: 22 },{ name: 'Vivek', age: 49 }, { name: 'Yogesh', age: 45 }, { name: 'Asmita', age: 52 }, { name: 'Geeta', age: 47 }, { name: 'Seeta', age: 50 }]
    this.peopleByCity = [
      {
        city: 'Pune', people: [{ name: 'Vivek', age: 49 }, { name: 'Yogesh', age: 45 }]
      },
      {
        city: 'Belgaum', people: [{ name: 'Asmita', age: 52 }, { name: 'Geeta', age: 47 }]
      },
      {
        city: 'Nagar', people: [{ name: 'Raj', age: 22 }, { name: 'Seeta', age: 50 }]
      }
    ];
  }

  ngOnInit(): void {
  }

}
