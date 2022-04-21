import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit {

  @Output()
  somethinghappend: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  

}
