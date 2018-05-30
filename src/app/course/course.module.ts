import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

export const SHARED_MODULE: any[] = [
    CommonModule,
    RouterModule
];

export const SHARED_COMPONENTS: any[] = [
    CourseDetailComponent
];

@NgModule({
    imports: [...SHARED_MODULE],
    declarations: [...SHARED_COMPONENTS]
})
export class CourseModule { }
