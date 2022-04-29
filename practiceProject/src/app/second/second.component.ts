import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  value!: string

  ngOnInit(): void {
  }

  display(newValue: string) {
    this.value = newValue;
  }

}
