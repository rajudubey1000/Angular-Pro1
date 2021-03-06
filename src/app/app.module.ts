import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContectusComponent } from './contectus/contectus.component';
import { MyheaderComponent } from './myheader/myheader.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { SettingComponent } from './setting/setting.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { TestdDirective } from './testd.directive';
import { HeadingHighlightDirective } from './heading-highlight.directive';
import { CustomSubmitDirective } from './custom-submit.directive';
import { ImgdivDirective } from './imgdiv.directive';
import { SqrtcurrPipe } from './sqrtcurr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContectusComponent,
    MyheaderComponent,
    MyfooterComponent,
    SettingComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
    TestdDirective,
    HeadingHighlightDirective,
    CustomSubmitDirective,
    ImgdivDirective,
    SqrtcurrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
