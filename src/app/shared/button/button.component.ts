import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
