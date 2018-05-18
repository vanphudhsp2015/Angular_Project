import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'main-description',
    templateUrl: './main-description.component.html',
    styleUrls: ['./main-description.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainDescriptionComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
