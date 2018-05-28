import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindUsComponent } from './find-us.component'
import { BrowserModule } from '@angular/platform-browser';

// import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        // AgmCoreModule.forRoot({
        //     apiKey: 'AIzaSyCsVn6hvjKUlSPVUiYECSmPsauaVofQAK4'
        // })
    ],
    declarations: [
        FindUsComponent,
    ]
})
export class FindUsModule { }
