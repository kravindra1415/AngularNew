import { Component } from "@angular/core";

@Component({
    selector: 'login-demo',
    templateUrl: './login.component.html'
})

export class Login {
    userNameError = false;
    passwordError = false;
    buttonDisabled = true;

    maps = new Map();

    constructor() {
        this.maps.set("user", "abc")
        this.maps.set("admin", "xyz")
    }

    // maps = new Map<string, string>([
    //     ["user", "abc"],
    //     ["admin", "xyz"]
    // ])

    checkUsername($event: any) {
        
    }


    validate(userName: HTMLInputElement, userPassword: HTMLInputElement) {
        //alert('ok');
        //console.log(this.maps.size);

        this.maps.forEach((key, value) => {
            if (key == userName.value && value == userPassword.value) {
                alert('success')
            }
            else {
                alert('error')
            }
        })




        // if (this.maps.get('userName') == userName.value && this.maps.get('userPassword') == userPassword.value) {
        //     alert('ok')
        // }
        // else {
        //     alert('no')
        // }
    }
}