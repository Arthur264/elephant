import {Component, OnInit, } from '@angular/core';
import { MENU_ITEMS } from './aside-menu';

@Component({
    selector: 'aside-menu',
    templateUrl: './aside-menu.component.html'
})

export class AsideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  menuItems = MENU_ITEMS;
  
  public openItem(event, self){
      var children = self.children[1];
      self.classList.toggle("active");
      children.classList.toggle("in");
  }
}
