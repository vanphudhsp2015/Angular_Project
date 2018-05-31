import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FindUsComponent } from './find-us/find-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ROUTES as CourseRoutingModule } from './course/course-routing.module';
import { ROUTES as TrainerRoutingModule } from './trainer/trainer-routing.module';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
    },
    {
        path: 'find-us',
        component: FindUsComponent
    },
    {
        path: 'course',
        children: [
            ...CourseRoutingModule
        ]
    },
    {
        path: 'trainer',
        children: [
            ...TrainerRoutingModule
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { useHash: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
