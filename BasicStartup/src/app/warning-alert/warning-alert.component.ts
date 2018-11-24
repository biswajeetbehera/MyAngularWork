import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warning-alert.component.html',
    styleUrls: ['./warning-alert.component.css'],
})
export class WarningAlertComponent {
    showAlert() {
        alert('This is warning Alert component');
    }
}
