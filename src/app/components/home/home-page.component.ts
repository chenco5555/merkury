import {Component, OnInit, Input} from '@angular/core';
import * as M from '../../app.models';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.Component.html'
})


export class HomePageComponent implements OnInit {
@Input() user: M.User;
@Input() tasks: M.Task[];
@Input() messages: M.Message[];
@Input() activities: M.Activity[];
numberOfNewMessages: number = 0;
numberOfDelaysTasks: number = 0;

  constructor(){
  }

  ngOnInit(){
    this.countNewMessages();
    this.countNumberOfDelaysTasks();

  }

  countNewMessages(): number{
    for(let item of this.messages){
      if(item.isNew){
        this.numberOfNewMessages +=1;
      }
    }
    this.numberOfNewMessages;
  }

  countNumberOfDelaysTasks(){
    for(let item of this.tasks){
      if(item.isDelays){
        this.numberOfDelaysTasks +=1;
      }
    }
    this.numberOfDelaysTasks;
  }


}
