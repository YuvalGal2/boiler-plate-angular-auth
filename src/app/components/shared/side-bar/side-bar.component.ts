import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
   public sidebarUpperNodes = [
     {
       imageUrl: '/assets/icons/side-bar/inbox.png'
     },
     {
       imageUrl: '/assets/icons/side-bar/draft.png'
     },
     {
       imageUrl: '/assets/icons/side-bar/archive.png'
     },
     {
       imageUrl: '/assets/icons/side-bar/delete.png'
     }
  ];
  public sidebarLowerNodes = [
    {
      imageUrl: '/assets/icons/side-bar/calendar.png'
    },
    {
      imageUrl: '/assets/icons/side-bar/whatsapp.png'
    },
    {
      imageUrl: '/assets/icons/side-bar/instagram.png'
    },
    {
      imageUrl: '/assets/icons/side-bar/facebook.png'
    },
    {
      imageUrl: '/assets/icons/side-bar/settings.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
