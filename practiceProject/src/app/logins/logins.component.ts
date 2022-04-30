import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm:any) {
    console.log(contactForm.value);
    console.log(contactForm.value.password)
  }

}
