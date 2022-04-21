import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

export class Pizza {
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
  public get size(): string {
    return this._size;
  }
  public set size(value: string) {
    this._size = value;
  }
  constructor(private _size: string, private _type: string, private _price: number) {

  }
}