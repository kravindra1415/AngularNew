import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'lowerOrUpper'
})

export class LowerAndUpper implements PipeTransform {

    transform(value: any, unit: string) {
        if (value || !isNaN(value)) {
            if (unit === 'l') {
                return value.toLowerCase();
            }
            else if (unit === 'u') {
                return value.toUpperCase();
            }
            else if (unit === 'A') {
                return value.charAt(0).toUpperCase()+value.substring(1,value.length);
            }
        }
    }
}