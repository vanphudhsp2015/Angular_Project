import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
    private base64textString: String = '';
  editorConfig = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        minHeight: '5rem',
        placeholder: 'Nhập Dữ Liệu Vào <3..',
        translate: 'no'
      };

  htmlContent = '';
  constructor() { }

  ngOnInit() {
  }
//   handleFileSelect(evt) {
//     // tslint:disable-next-line:prefer-const
//     let files = evt.target.files;
//     const file = files[0];

//   if (files && file) {
//       const reader = new FileReader();

//       reader.onload = this._handleReaderLoaded.bind(this);

//       reader.readAsBinaryString(file);
//   }
// }

// _handleReaderLoaded(readerEvt) {
//    const binaryString = readerEvt.target.result;
//           this.base64textString = btoa(binaryString);
//           console.log(btoa(binaryString));
//   }

  processForm() {
    console.log('sads');
 }
}
