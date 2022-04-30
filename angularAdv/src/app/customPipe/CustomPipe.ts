import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tempConverter',
})

export class CustomPipe implements PipeTransform {

    transform(value: any, unit: string) {
        if (value && !isNaN(value)) {
            if (unit === 'c') {
                var temp = (value / 32) / 1.8;
                return temp.toFixed(2);
            }
            else if (unit === 'f') {
                var temp = (value * 1.8) + 32;
                return temp.toFixed(2);
            }       
        }
        return;
    }

}