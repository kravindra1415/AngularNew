import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  p1 = new Product("laptop", 10000)
  p2 = new Product("PC", 20000)
  p3 = new Product("earphone", 1000)

  productsMap = new Map();

  constructor() {
    this.productsMap.set(this.p1, 15);
    this.productsMap.set(this.p2, 25);
    this.productsMap.set(this.p3, 20);
  }

  ngOnInit(): void {
  }

  getQty(p: Product) {
    return this.productsMap.get(p)
  }

  display() {
    console.log(this.getQty(this.p2));
  }
}

export class Product {
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get productName(): string {
    return this._productName;
  }
  public set productName(value: string) {
    this._productName = value;
  }

  constructor(private _productName: string, private _price: number) {
  }
}