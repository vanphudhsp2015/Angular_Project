import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
