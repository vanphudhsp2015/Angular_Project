import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTES } from './trainers-data';
declare var $:any;
import { Router } from '@angular/router';

@Component({
    selector: 'main-trainer',
    templateUrl: './trainer.component.html',
    styleUrls: ['./trainer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainerComponent implements OnInit {

  traineritems: any[];

  items: any[] = [
        { title: 'SAY SOMETHIMG ABOUT TRAINER' },
  ];


  descriptions: any[] = [
        { title: 'Working side by side with your team to manage and optimize your digital sport investments.' },
  ];


  constructor(private router: Router) { }

  ngOnInit() {
     $.getScript('../../../../assets/js/function_home.min.js');
     this.traineritems = ROUTES.filter(traineritems => traineritems);
  }

}
