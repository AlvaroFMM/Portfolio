import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './components-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({

    declarations: [
      HomeComponent,
      ContactComponent,
      ProjectsComponent,
      SkillsComponent,
      AboutMeComponent,
    ],
    imports: [
      CommonModule,
      ComponentRoutingModule,
      SharedModule
      
    ],
})
export class ComponentsModule { }
