import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { MyChildComponent } from './my-child/my-child.component';
import { MyParentComponent } from './my-parent/my-parent.component';
import { StoreComponent } from './store/store.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { DisplaycomponentComponent } from './displaycomponent/displaycomponent.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { HighlightPropertiesDirective } from './highlight-properties.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    MyChildComponent,
    MyParentComponent,
    StoreComponent,
    WarehouseComponent,
    DisplaycomponentComponent,
    SwitchDemoComponent,
    HighlightPropertiesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
