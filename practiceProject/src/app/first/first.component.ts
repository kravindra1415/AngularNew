import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  @Input()
  getValue!: string

  arr: Array<any> = ['A', 'B', 'C']

  ngOnInit(): void {
  }

}
