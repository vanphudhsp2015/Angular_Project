import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Slide } from '../core/model/slide';
import { Router } from '@angular/router';
import { SlideService } from '../core/service/slide.service';
@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingComponent implements OnInit {
    private base64textString: String = '';
    private slide: Slide[];
    private slides: Slide;
    constructor(private slideService: SlideService, private _router: Router, private ref: ChangeDetectorRef) { }

    ngOnInit() {
        this.slides = this.slideService.getter();
        this.init();
    }
    processForm() {
        this.slides.image = this.base64textString;
        if (this.slides.idSlideshow == undefined) {
            this.slideService.createFeedback(this.slides).subscribe((slides) => {
                console.log(slides);
                this.init();
                // this.load();
                // this.router.navigate(['/table-class']);

                this.clear();
            }, (error) => {
                console.log(error);
            });
        } else {
            this.slideService.updateFeedback(this.slides).subscribe((slides) => {
                console.log(slides);
                this.init();
                // this.router.navigate(['/table-class']);
                // this.load();
                this.clear();
            }, (error) => {
                console.log(error);
            });
        }
    }
    // getdata
    init() {
        this.slideService.getSlide().subscribe((data) => {
            console.log(data);
            this.slide = data;
        }, (error) => {
            console.log(error);
        });
        setInterval(() => {
            this.ref.markForCheck();
        }, 100);
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
        // console.log(this.base64textString);
    }
    // delete
    deleteSlide(slide) {
        let answer = confirm('Bạn Muốn Xóa ?');
        if (answer) {
            this.slideService.deleteSlide(slide.idSlideshow).subscribe((data) => {
                this.slide.splice(this.slide.indexOf(slide), 1);
                // this.load();
            }, (error) => {
                console.log(error);
            });
        } else {
            // some cod
            console.log('end');
        }

    }
    // update
    updateSlide(slide) {
        let answer = confirm('Bạn Muốn Sửa ?');
        if (answer) {
            this.slides.idSlideshow = slide.idSlideshow;
            this.slides.image = slide.image;
            this.slides.title = slide.title;
            this.slides.description = slide.description;
            this.slides.text = slide.text;
        } else {
            // some code
            console.log('end');
        }
        // this.feedbackService.setter(feedback);

    }
    // clear input
    clear() {
        this.slides.idSlideshow = null;
        this.slides.image = null;
        this.slides.title = null;
        this.slides.description = null;
        this.slides.text = null;

    }
    // load
    load() {
        location.reload();
    }
}
