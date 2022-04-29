import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.css']
})
export class SwitchComponentComponent implements OnInit {

  num:any=2;

  constructor() { }

  ngOnInit(): void {
  }

}
