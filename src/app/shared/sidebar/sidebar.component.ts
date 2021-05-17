import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private sidebarService: SidebarService
      ,public  ProfileService:ProfileService
    ) {
    this.menuItems = sidebarService.menu;
    
  }

  ngOnInit(): void {
  }

}
