import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public rutasGitHubProject01 = [
    { pathLiveDemo: 'https://github.com/AlvaroFMM' },
    { path: 'https://www.linkedin.com/in/alvaro-felix-mamani-mamani-a6654b19a/'}
   
  ]
  onRedirectGitHub(): void{
    const navigateGit = this.rutasGitHubProject01[0].pathLiveDemo;
    if (navigateGit) {
      window.open(navigateGit, '_blank'); // Abre la URL en una nueva pestaña
    }
  }
  onRedirectGitHu2b(): void{
    const navigateGit = this.rutasGitHubProject01[1].path;
    if (navigateGit) {
      window.open(navigateGit, '_blank'); // Abre la URL en una nueva pestaña
    }
  }
}
