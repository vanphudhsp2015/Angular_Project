import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeDashboardComponent} from './home-dashboard/home-dashboard.component';
import { CardComponent } from './home-dashboard/card/card.component';
import { TableComponent } from './home-dashboard/table/table.component';
import { CourseComponent } from './course/course/course.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { NgxEditorModule } from 'ngx-editor';
import {DatePipe} from '@angular/common';
export const SHARED_MODULE: any[] = [
    CommonModule,
    RouterModule,
    NgxEditorModule
  ];
export const SHARED_COMPONENTS: any[] = [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    HomeDashboardComponent
  ];
@NgModule({
    imports: [...SHARED_MODULE],
    exports: [...SHARED_COMPONENTS],
    declarations: [...SHARED_COMPONENTS, CardComponent, TableComponent, CourseComponent, CourseDetailComponent]
})
export class DashboardModule { }
