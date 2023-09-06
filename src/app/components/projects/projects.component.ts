import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rutas } from '../interfaces/rutas.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor (){}
  public rutaFinalCountry = "./assets/ProjectCountrySpa-01.png";
  public rutaFinalPHP = './assets/Php01.png';
//Imagen Proyecto CountrySPA
  public rutasImage = [
    { path: './assets/ProjectCountrySpa-01.png' },
    { path: './assets/ProjectCountrySpa-02.png' },
    { path: './assets/ProjectCountrySpa-03.png' },
  ]
 //Imagen Proyecto PHP 
  public rutasImagePHP = [
    { path: './assets/Php01.png' },
    { path: './assets/php02.png' },
    { path: './assets/php03.png' },
    { path: './assets/php04.png' },
    { path: './assets/php05.png' },
  ]
  public rutasGitHubProject01 = [
    { pathLiveDemo: 'https://luxury-crumble-826050.netlify.app' },
    { path: 'https://github.com/AlvaroFMM/angular-project-api-country.git'}
  ]
  public rutasGitProject02 = [
    {pathliveDemo: 'https://porfolio01996.000webhostapp.com/app/TicketSisUTP/index.php'},
    { path: 'https://github.com/AlvaroFMM/Sistema_TicketAFP'}
  ]
  public rutasGitHubProject03 = [
    { pathLiveDemo: 'https://tubular-monstera-6e061c.netlify.app' },
    { path: 'https://github.com/AlvaroFMM/gifProject'}
   
  ]

  onMouseEnter(inputArray: Rutas[] ): void{
    for ( let i = 0; i < inputArray.length ; i++){
      setTimeout(() => {
        
        if(inputArray === this.rutasImage)
        {
          this.rutaFinalCountry = inputArray[i].path
        }else{
          this.rutaFinalPHP = inputArray[i].path
        }
        
      }, i * 500); 
    }
  }
  onRedirectGitHub(): void{
    const navigateGit = this.rutasGitHubProject01[1].path;
    if (navigateGit) {
      window.open(navigateGit, '_blank'); // Abre la URL en una nueva pestaña
    }
  }

  onRedirectGitHubLive(): void{
    const navigateGitlive = this.rutasGitHubProject01[0].pathLiveDemo;
    if (navigateGitlive) {
      window.open(navigateGitlive, '_blank'); // Abre la URL en una nueva pestaña
    }
  }
  onRedirectGitHubLive2(): void{
    const navigateGitlive = this.rutasGitProject02[0].pathliveDemo;
    if (navigateGitlive) {
      window.open(navigateGitlive, '_blank'); // Abre la URL en una nueva pestaña
    }
  }
  onRedirectGitHub2(): void{
    const navigateGit = this.rutasGitProject02[1].path;
    if (navigateGit) {
      window.open(navigateGit, '_blank'); // Abre la URL en una nueva pestaña
    }
  }
  onRedirectGitHubLive3(): void{
    const navigateGitlive = this.rutasGitHubProject03[0].pathLiveDemo;
    if (navigateGitlive) {
      window.open(navigateGitlive, '_blank'); // Abre la URL en una nueva pestaña
    }
  }
  onRedirectGitHub3(): void{
    const navigateGit = this.rutasGitHubProject03[1].path;
    if (navigateGit) {
      window.open(navigateGit, '_blank'); // Abre la URL en una nueva pestaña
    }
  }
}
