import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrls: ['./displaycomponent.component.css']
})
export class DisplaycomponentComponent implements OnInit {

  @Input()
  objects!: Array<any>;

  getKeys(obj: any) {

    return Object.keys(obj)

  }

  change($event: any) {
    for (let obj of this.objects) {
      for (let value of obj) {
        if (obj[value] == $event._productName) {

          obj._totalQty = obj._totalQty - $event._unit
        }
        else {
          continue;
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
