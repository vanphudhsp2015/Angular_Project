import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../core/services/trainer.service';
export const ROUTES = [
    { path: '/trainer/Mane', name: 'Mane', position: 'CEO, Teacher', img: 'assets/img/trainner/trainner1.jpg', class: '' },
    { path: '/trainer/Salah', name: 'Salah', position: 'Founder',  img:'assets/img/trainner/trainner2.jpg', class: '' },
    { path: '/trainer/Firmino', name: 'Firmino', position: 'Teacher',  img:'assets/img/trainner/trainner3.jpg', class: '' },
    { path: '/trainer/Hendo', name: 'Hendo', position: 'Teacher',  img:'l../../', class: '' },
    { path: '/trainer/Chamberlain', name: 'Chamberlain', position: 'MASTER Teacher', img:'/../../', class: '' },
    
];

@Component({
    selector: 'trainer',
    templateUrl: './trainer.component.html',
    styleUrls: ['./trainer.component.css'],
    providers:[TrainerService],
    changeDetection: ChangeDetectionStrategy.Default
})
export class TrainerComponent implements OnInit {
    traineritems: any[];
    constructor(private router: Router,private trainerService:TrainerService) { }
    // goToTrainer(){
    //     this.router.navigateByUrl('/trainer');
    //      location.reload()
    //  }
    ngOnInit() {
        this.trainerService.getAllTrainers().subscribe(
            data=>this.traineritems=data
        );
        // this.traineritems = ROUTES.filter(traineritems => traineritems);
        // console.log(this.traineritems);
    }

}
