import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceProject';

  userStatus: string = "new";
  flag = true;

  text!: string;

  showForm: boolean = false;

  showLogin() {
    this.text = "Login"
  }

  showRegister() {
    this.text = "Register"
  }

  showContact() {
    this.text = "Contact"
  }

  showAbout() {
    this.text = "About"
  }

  showForms(val: any) {
    this.text = val;
  }


  toggleLoginAndRegister() {
    this.flag = !this.flag;
    this.userStatus = this.flag ? 'old' : 'new';
  }
}


