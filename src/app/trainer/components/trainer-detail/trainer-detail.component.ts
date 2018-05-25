import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'trainer-detail',
    templateUrl: './trainer-detail.component.html',
    styleUrls: ['./trainer-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainerDetailComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
