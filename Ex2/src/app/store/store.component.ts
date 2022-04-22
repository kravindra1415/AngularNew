import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Output()
  newEvent: EventEmitter<any> = new EventEmitter()

  order: Order = new Order("laptop", 1);
  constructor() { }

  ngOnInit(): void {
  }

  // product = new Products(1, "pc", 20000)
  // order = new Order(2, this.product);

  // productOrder = this.order;

  someEvent(product: string, unit: number) {
    // this.newEvent.emit(this.productOrder);
    // console.log(this.newEvent.emit);
    // console.log(this.product)

    let order = new Order(product, unit)
    this.newEvent.emit(order)
  }
}

// export class Products {

//   public get pprice(): number {
//     return this._pprice;
//   }
//   public set pprice(value: number) {
//     this._pprice = value;
//   }
//   public get pname(): string {
//     return this._pname;
//   }
//   public set pname(value: string) {
//     this._pname = value;
//   }
//   public get pid(): number {
//     return this._pid;
//   }
//   public set pid(value: number) {
//     this._pid = value;
//   }

//   constructor(private _pid: number, private _pname: string, private _pprice: number) { }
// }

export class Order {
  public get productName(): string {
    return this._productName;
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public get unit(): number {
    return this._unit;
  }
  public set unit(value: number) {
    this._unit = value;
  }


  constructor(private _productName: string, private _unit: number) { }
}