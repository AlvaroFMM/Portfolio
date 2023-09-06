import { Component,OnInit } from '@angular/core';
import { LightModeService } from './services/LightModeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLightMode!: boolean;
  constructor(private lightmodeService: LightModeService) {}

  title = 'my-portfolio';


}
