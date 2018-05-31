import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';

@Component({
    selector: 'course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css'],
    providers:[CourseService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailComponent implements OnInit {

    params:any;
    ngOnInit(): void {
        
        this.courseService.getCourse(2).subscribe(
            data=>this.course=data
        )
    }
    course: any[] ;
    // = [

    //         { levels: 'classic', title: 'CLASSIC COURSE', content: '/***/',  class: "/courses-detail/classic" },
    //         { levels: 'advanced', title: 'ADVANCED COURSE', content: '/***/',  class: "/courses-detail/advance" },
    //         { levels: 'normal', title: 'NORMAL COURSE', content: '/***/', class: "/courses-detail/normal" },
    //         { levels: 'cro', title: 'CRO COURSE', content: '/***/', class: "/courses-detail/cro" },

    //     ];
    start: string;
    
    stringSologan1: string;
    stringSologan2: string;
    coursess: any[];

    constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService) {
        this.params = this.activatedRoute.snapshot.params;
    }

}
