import { Component } from '@angular/core';
@Component({
    selector: 'app-property-binding',
    templateUrl: './property-binding.component.html',
    styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
    username: string = null;

    onInput(event: Event) {
        this.username = (event.target as HTMLInputElement).value;
    }

    clearUsername(event: Event) {
        this.username = '';
    }
}
