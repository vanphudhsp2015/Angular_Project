import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { TypingAnimationDirective } from 'angular-typing-animation';


export const SHARED_MODULE: any[] = [
    CommonModule,
    RouterModule
];

export const SHARED_COMPONENTS: any[] = [
    CourseDetailComponent
];

@NgModule({
    imports: [...SHARED_MODULE],
    exports: [...SHARED_COMPONENTS],
    declarations: [...SHARED_COMPONENTS,
        CourseDetailComponent,
        TypingAnimationDirective
    ]
})
export class CourseModule { }
