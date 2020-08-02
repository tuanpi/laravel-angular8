/*--------------------------------------------------
* @project PHP
* @file    .../info/info.component.ts
* --------------------------------------------------
* @Date:   2020-08-02 10:14:15
* @Author: Phan Huu Tuan | pi.huutuan@gmail.com
* 
* @Last Modified by:   Phan Huu Tuan
* @Last Modified time: 2020-08-02 11:22:45
* --------------------------------------------------*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  results = [
    {
      id: 1,
      placeholder: 'Text 01',
      actionName: 'Submit 01',
      disabledAction: true,
      message: '',
    },
    {
      id: 2,
      placeholder: 'Text 02',
      actionName: 'Submit 02',
      disabledAction: true,
      message: ''
    }
  ];

  itemResult = {
    id: null,
    message: ''
  }

  props = {
    title: "Info page",
    subTitle: "Click 'Approved' to view data",
  }
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
          console.log(this.router.getCurrentNavigation().extras.state);
     }

  ngOnInit() {
    console.log('history.state', history.state.results);
    this.results=history.state.results;
  }

  getData(id) {
    this.itemResult = this.results[id - 1];
  }

}
