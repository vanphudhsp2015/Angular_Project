import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

declare var $:any;
import { ROUTESC } from './data/course-child-data';
import { ROUTESP } from './data/course-parent-data';
import { ROUTESF } from './data/focus-on-data';
import { ROUTES } from '../shared/trainer/trainers-data';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent implements OnInit {
    parentcourse: any[];
    chilecourse: any[];
    focusitems: any[];

    traineritems: any;

    items: any[] = [
        { title: 'Try out the hanah sport center' },
    ];

    descriptions: any[] = [
        { title: 'with out 3-days all access pass with no commitment.' },
    ];

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
       this.parentcourse = ROUTESP.filter(parentcourse => parentcourse);
       this.chilecourse = ROUTESC.filter(chilecourse => chilecourse);
       this.focusitems = ROUTESF.filter(focusitems => focusitems);
       this.traineritems = ROUTES.filter(traineritems => traineritems);
    }

    onTrainerClicked(trainerId: number) {
      console.log('Clicked on button view profile!');
      this.router.navigate(['../trainer/', trainerId]);
    }

}
