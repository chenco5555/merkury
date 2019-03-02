import { Component, OnInit} from '@angular/core';
import * as M from '../../app.models';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent implements OnInit{
  user: M.User;
  tasks: M.Task[];
  messages: M.Message[];
  activities: M.Activity[];
  openMenu: boolean = false;



  constructor(){}

  ngOnInit(){
    this.initialUserData();
  }

  handleSideBarMenu($event: boolean) {
    this.openMenu = $event;
  }




  initialUserData(){
    this.user = {
      id: '3345',
      name: 'John',
      img: '../../../assets/images/main-user.png'
    };

    this.tasks = [
      {
        userId: '55555',
        header: 'New website for Symu.co',
        date: '5 Days Delay',
        img: '../../../assets/images/n.png',
        isDelays: true
      },
      {
        userId: '55555',
        header: 'Free business PSD Template',
        date: '5 Days Delay',
        img: '../../../assets/images/f.png',
        isDelays: true
      },
      {
        userId: '55555',
        header: 'New logo for JCD.pl',
        date: '5 Days left',
        img: '../../../assets/images/n.png',
        isDelays: false
      },
      {
        userId: '55555',
        header: 'free Icon set vol.3',
        date: '5 Days left',
        img: '../../../assets/images/f.png',
        isDelays: false
      },
      {
        userId: '55555',
        header: 'free Icon set vol.3',
        date: '5 Days left',
        img: '../../../assets/images/f.png',
        isDelays: false
      }
    ];

    this.messages = [

      {
        name: 'Nina Jones',
        date: '5 minutes ago',
        img: '../../../assets/images/person1.png',
        post: "Hey You! It's me again :) attached new (**)",
        isNew: true
      },
      {
        name: 'Nina Jones',
        date: 'About 20 hours ago',
        img: '../../../assets/images/person1.png',
        post: "Hey! attached some new PSD files for (**)",
        isNew: true
      },
      {
        name: 'James smith',
        date: '2 Days ago',
        img: '../../../assets/images/person2.png',
        post: "Good morning. you are fired!",
        isNew: false
      },
      {
        name: 'Nina Jones',
        date: 'About 2 Days ago',
        img: '../../../assets/images/person1.png',
        post: "Hello! Could you bring me coffee please?",
        isNew: false
      },
      {
        name: 'Nina Jones',
        date: '5 minutes ago',
        img: '../../../assets/images/person1.png',
        post: "Hey You! It's me again :) attached new (**)",
        isNew: false
      }

    ];

    this.activities = [
      {
        userName: 'Nina Jones',
        date: 'Just now',
        type: 'add a new project',
        img: '../../../assets/images/person1.png',
        projectName: 'Free UI kit'
      },

      {
        userName: 'James smith',
        date: '40 minutes ago',
        type: 'commended project',
        img: '../../../assets/images/person2.png',
        projectName: 'Free PSD Template'
      },
      {
        userName: 'Alex Clooney',
        date: '1 hours ago',
        type: 'completed a task',
        img: '../../../assets/images/person4.png',
        projectName: 'Symu Website'
      },
      {
        userName: 'Alexandra Spears',
        date: '3 hours ago',
        type: 'added a new project',
        img: '../../../assets/images/person3.png',
        projectName: 'Free PSD'
      },
      {
        userName: 'Nina Jones',
        date: 'Just now',
        type: 'add a new project',
        img: '../../../assets/images/person1.png',
        projectName: 'Free UI kit'
      },

      {
        userName: 'James smith',
        date: '40 minutes ago',
        type: 'commended project',
        img: '../../../assets/images/person2.png',
        projectName: 'Free PSD Template'
      },
      {
        userName: 'Alex Clooney',
        date: '1 hours ago',
        type: 'completed a task',
        img: '../../../assets/images/person4.png',
        projectName: 'Symu Website'
      },
      {
        userName: 'Alexandra Spears',
        date: '3 hours ago',
        type: 'added a new project',
        img: '../../../assets/images/person3.png',
        projectName: 'Free PSD'
      },
      {
        userName: 'Alex Clooney',
        date: '1 hours ago',
        type: 'completed a task',
        img: '../../../assets/images/person4.png',
        projectName: 'Symu Website'
      },
      {
        userName: 'Alexandra Spears',
        date: '3 hours ago',
        type: 'added a new project',
        img: '../../../assets/images/person3.png',
        projectName: 'Free PSD'
      }

    ]
  }
}
