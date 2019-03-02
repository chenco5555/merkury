import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html'
})


export class SiteHeaderComponent implements OnInit {
  @Input() user: string;
  @Output() insideOpenSideBarMenuButtonClicked : EventEmitter<boolean> = new EventEmitter<boolean>();
  openMenu: boolean = false;

  constructor(){

  }

  ngOnInit(){
  }

  openSideBarMenu(){
    if (this.openMenu){
      this.openMenu = false;
    } else {
      this.openMenu = true;
    }
    
    this.insideOpenSideBarMenuButtonClicked.emit(this.openMenu);
  }


}
