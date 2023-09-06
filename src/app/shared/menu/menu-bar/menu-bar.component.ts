import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
 
})
export class MenuBarComponent implements OnInit{
  public activeBar: boolean = false;
  public showMenu: boolean = false;

  constructor(private route: Router) {}

  ngOnInit(): void {
    
  }

  targetActive(url: string): void{
    this.route.events.subscribe((e) =>{
      if(e instanceof NavigationEnd){
        this.activeBar = this.route.url === url;
        console.log(this.activeBar)
      }else{
        this.activeBar = false
      }
    })
  }


  onClickMenuShow():void{
    this.showMenu = !this.showMenu;
  }


}
