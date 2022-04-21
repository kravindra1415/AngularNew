import { Component } from "@angular/core";

@Component({
    selector: 'template-demo',   //custom(user-defined) tag name
    templateUrl: './templateDemo.html'
})

export class TemplateReference {
    name: string = '';
    // save($event: any) {
    //     alert('save method called');
    //     this.name = $event.target.value;
    // }
    // save(name: string) {
    //     alert('save method called');
    //     this.name = name;
    // }

    saveUsingTemplateRef(element: HTMLInputElement) {
        alert('save method called');
        this.name = element.value;
    }

    saveUsingEvent($event: any) {
        this.name = $event.target.value;
    }

    saveUsingId(id: string) {
        let element = document.getElementById(id) as HTMLInputElement;
        this.name = element.value;
    }
}