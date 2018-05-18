import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'trainer',
    templateUrl: './trainer.component.html',
    styleUrls: ['./trainer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
