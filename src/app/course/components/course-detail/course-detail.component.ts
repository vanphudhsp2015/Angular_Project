import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
        this.params = this.activatedRoute.snapshot.params;
        this.courseService.getCourse(this.params.id).subscribe(
            data=>{this.course=data
            console.log(data);
            }
        );
        setInterval(() => {
            this.ref.markForCheck();
        }, 1000);
    }
    course: any ;
    // = [

    //         { levels: 'classic', title: 'CLASSIC COURSE', content: '/***/',  class: "/courses-detail/classic" },
    //         { levels: 'advanced', title: 'ADVANCED COURSE', content: '/***/',  class: "/courses-detail/advance" },
    //         { levels: 'normal', title: 'NORMAL COURSE', content: '/***/', class: "/courses-detail/normal" },
    //         { levels: 'cro', title: 'CRO COURSE', content: '/***/', class: "/courses-detail/cro" },

    //     ];
    start: string;
    
    stringSologan1: string;
    stringSologan2: string;

    constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService,private ref: ChangeDetectorRef) {
        
    }

}
