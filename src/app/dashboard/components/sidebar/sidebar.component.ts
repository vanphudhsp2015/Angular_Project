import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Router} from '@angular/router';
declare const $: any;
    declare interface RouteInfo {
        path: string;
        title: string;
        icon: string;
        class: string;
    }
    export const ROUTES: RouteInfo[] = [
        { path: 'home-dashboard', title: 'Tổng Quan',  icon: 'content_paste', class: '' },
        { path: 'trainer', title: 'Biểu Mẫu Giáo Viên',  icon: 'person', class: '' },
        { path: 'trainer-detail', title: 'Giáo Viên',  icon: 'class', class: '' },
        { path: 'course-detail', title: 'Danh Sách Lớp',  icon: 'format_align_justify', class: '' },
        { path: 'course', title: 'Biểu Mẫu Lớp',  icon: 'assignment_ind', class: '' },
        { path: 'setting', title: 'Cài Đặt',  icon: 'perm_data_setting', class: '' },
    ];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

    menuItems: any[];

    constructor(private router: Router) { }

    ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
