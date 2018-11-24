import { Component } from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
    showPara = false;
    timers: number[] = [];
    increment = 0;

    onClick() {
        this.showPara = !this.showPara;
        this.timers.push(++this.increment);
    }
}
