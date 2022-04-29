import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isShown: boolean = false;
  text='show';

  buttonText=true;

  toggleShow() {
    this.text=this.isShown?'hide':'show'
    this.isShown = !this.isShown;
  }

  onClick(){
    this.buttonText=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
