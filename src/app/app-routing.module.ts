import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContectusComponent } from './contectus/contectus.component';
import { SettingComponent } from './setting/setting.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"aboutus", component: AboutusComponent},
  {path:'contactus', component: ContectusComponent},
  {path:'setting', component: SettingComponent},
  {path:'teacher', component: TeacherComponent},
  {path:'student', component: StudentComponent},
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
