import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProtopolioComponent } from './protopolio/protopolio.component';
import { SkillsComponent } from './skills/skills.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'protopolio',component:ProtopolioComponent},
  {path:'education',component:EducationComponent},
  {path:'contact',component:ContactComponent},
  {path:'skills',component:SkillsComponent},
  {path:'',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset:[0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
