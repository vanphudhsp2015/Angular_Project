import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'main-title',
    templateUrl: './main-title.component.html',
    styleUrls: ['./main-title.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainTitleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
