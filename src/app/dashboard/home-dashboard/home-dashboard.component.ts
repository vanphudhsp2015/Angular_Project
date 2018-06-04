import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
