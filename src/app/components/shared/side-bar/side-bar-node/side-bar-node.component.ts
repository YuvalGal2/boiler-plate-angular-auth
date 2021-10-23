import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar-node',
  templateUrl: './side-bar-node.component.html',
  styleUrls: ['./side-bar-node.component.scss']
})

export class SideBarNodeComponent implements OnInit {
  @Input('nodeSettings') nodeSettings;
  constructor() { }

  ngOnInit(): void {
  }

}
