import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  @ViewChild('menuItem') el: ElementRef;
  
  
  // private hoverItem(){
  //   console.log(this.el)
  // }

}
