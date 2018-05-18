import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
