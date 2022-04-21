import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from '../store/store.component';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showInfo($event: any) {
    
  }
}
