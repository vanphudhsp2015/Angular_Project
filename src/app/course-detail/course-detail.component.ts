import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
