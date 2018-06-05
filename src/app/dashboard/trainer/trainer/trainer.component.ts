import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from '../../core/model/trainer';
import { Router } from '@angular/router';
import { TrainerService } from '../../core/service/trainer.service';
@Component({
    selector: 'trainer',
    templateUrl: './trainer.component.html',
    styleUrls: ['./trainer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainerComponent implements OnInit {
    private base64textString: String = '';
    private trainer: Trainer;
    photos: Object;
    constructor(
        private router: Router,
        private trainerService: TrainerService) { }

    ngOnInit() {
        this.trainer = this.trainerService.getter();


    }

    processForm() {

        if (this.trainer.idTrainer == undefined) {
            this.trainerService.createTrainer(this.trainer).subscribe((trainer) => {
                this.router.navigate(['/trainer-dashboard-detail']);
                this.clear();
            }, (error) => {
                console.log(error);
            });
        } else {
            this.trainerService.updateTrainer(this.trainer).subscribe((trainer) => {
                this.router.navigate(['/trainer-dashboard-detail']);
                this.clear();
            }, (error) => {
                console.log(error);
            });
        }

    }
    handleFileSelect(evt) {
        // tslint:disable-next-line:prefer-const
        let files = evt.target.files;
        const file = files[0];

        if (files && file) {
            const reader = new FileReader();

            reader.onload = this._handleReaderLoaded.bind(this);

            reader.readAsBinaryString(file);
        }
    }
    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
    }

    // clear input
    clear() {
        this.trainer.idTrainer = null;
        this.trainer.lastName = '';
        this.trainer.firstName = '';
        this.trainer.birthday = '';
        this.trainer.phone = '';
        this.trainer.address = '';
        this.trainer.image = '';
        this.trainer.joined = '';
        this.trainer.status = '';
        this.trainer.description = '';
    }

}
