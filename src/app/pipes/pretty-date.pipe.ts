import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'prettyDate'
})
export class PrettyDatePipe implements PipeTransform {
    transform(joined: string) {
        return new Date(joined).toDateString()
    }
}