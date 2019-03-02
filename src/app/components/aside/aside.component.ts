import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'aside',
  templateUrl: './aside.component.html'
})


export class AsideComponent implements OnInit {
  @Input() openMenu: boolean;
  
  constructor(){

  }

  ngOnInit(){
  }
  

}
