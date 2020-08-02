/*--------------------------------------------------
* @project PHP
* @file    .../header/header.component.ts
* --------------------------------------------------
* @Date:   2020-08-02 02:07:58
* @Author: Phan Huu Tuan | pi.huutuan@gmail.com
* 
* @Last Modified by:   Phan Huu Tuan
* @Last Modified time: 2020-08-02 10:21:44
* --------------------------------------------------*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() props: {
    title: string;
    subTitle: string;
  };

  constructor() { }

  ngOnInit() {
  }

}
