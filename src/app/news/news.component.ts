import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
