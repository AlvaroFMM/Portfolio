import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu/menu-bar/menu-bar.component';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { RouterModule } from '@angular/router';
import { ParticleComponent } from './menu/particle/particle.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    ParticleComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    RouterModule
  ],
  exports: [
    MenuBarComponent,
    ParticleComponent
  ]
})
export class SharedModule { }
