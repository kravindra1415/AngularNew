import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Output() newEvent = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
  }

  product = new Products(1, "pc", 20000)
  order = new Order(2, this.product);

  productOrder = this.order;

  someEvent() {
    this.newEvent.emit(this.productOrder);
    console.log(this.newEvent.emit);
    console.log(this.product)
  }
}

export class Products {

  public get pprice(): number {
    return this._pprice;
  }
  public set pprice(value: number) {
    this._pprice = value;
  }
  public get pname(): string {
    return this._pname;
  }
  public set pname(value: string) {
    this._pname = value;
  }
  public get pid(): number {
    return this._pid;
  }
  public set pid(value: number) {
    this._pid = value;
  }

  constructor(private _pid: number, private _pname: string, private _pprice: number) { }
}

export class Order {

  public get product(): Products {
    return this._product;
  }
  public set product(value: Products) {
    this._product = value;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }

  constructor(private _quantity: number, private _product: Products) { }
}