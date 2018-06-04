import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TrainerModule } from './trainer/trainer.module';
import { CourseModule } from './course/course.module';
// import { AgmCoreModule } from '@agm/core';
import { SliderModule } from 'ngx-slider';

import { AppConfigService } from './core/services/app-config.service';
import { AuthService } from './core/services/auth.service';
import { ExceptionService } from './core/services/exception.service';
import { InterceptorService } from './core/services/interceptor.service';
import { LocalStorageService } from './core/services/local-storage.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FindUsComponent } from './find-us/find-us.component';
import { CourseComponent } from './course/course.component';
import { TrainerComponent } from './trainer/trainer.component';
import { EventComponent } from './event/event.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './dashboard/components/footer/footer.component';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';

export const APP_MODULES: any[] = [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    SliderModule,
    ReactiveFormsModule,
    HttpModule,
    // AgmCoreModule,
    TrainerModule,
    CourseModule
];

export const APP_SERVICES: any[] = [
    AppConfigService,
    LocalStorageService,
    ExceptionService,
    AuthService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
    }
];

export const APP_COMPONENTS: any[] = [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    FindUsComponent,
    CourseComponent,
    TrainerComponent,
    EventComponent,
    NewsComponent
];

@NgModule({
    declarations: [...APP_COMPONENTS, FooterComponent, NavbarComponent, SidebarComponent, HomeComponent, HomeDashboardComponent],
    imports: [...APP_MODULES],
    providers: [...APP_SERVICES],
    bootstrap: [AppComponent]
})
export class AppModule { }
