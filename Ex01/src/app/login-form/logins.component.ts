import { Component } from "@angular/core";

@Component({
    selector: "login-form",
    templateUrl: './logins.component.html'
})

export class LoginComponent {
    userName: string = "admin";
    userPassword = "aaaaa";
    myUserName: string = '';
    myUserPassword: string = '';
    msg !: string;
    fieldMsg!: string;
    disabled = true;

    checkUserName(event: any) {
        if (event.target.value.length < 4 || event.target.value.length > 8) {
            this.msg = "user name must contains min 4  char and max 10";
            this.disabled = true;
        }
        else {
            this.disabled = false;
            this.msg = "";
        }
    }

    checkUserPassword(event: any) {
        if (event.target.value.length < 4 || event.target.value.length > 8) {
            this.msg = "user password must contains min 4 char and max 10";
            this.disabled = true;
        }
        else {
            this.disabled = false;
            this.msg = "";
        }
    }   

    validate(userName: string, userPassword: string) {
        this.myUserName = userName;
        this.userPassword = userPassword;

        if (this.userName == userName && this.userPassword == userPassword) {
            this.fieldMsg = "Credentials are correct!!"
        }

        else {
            this.fieldMsg = "Please enter valid Credentials!!"
        }

        console.log(userName, userPassword)
    }

    resetData(userId: HTMLInputElement, password: HTMLInputElement) {
        userId.value = "";
        password.value = "";
        this.disabled = true;
    }
}