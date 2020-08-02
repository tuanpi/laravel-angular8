/*--------------------------------------------------
* @project PHP
* @file    .../footer/footer.component.ts
* --------------------------------------------------
* @Date:   2020-08-02 02:09:55
* @Author: Phan Huu Tuan | pi.huutuan@gmail.com
* 
* @Last Modified by:   Phan Huu Tuan
* @Last Modified time: 2020-08-02 10:21:34
* --------------------------------------------------*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  authorInfo = {
    name: "Phan Hữu Tuấn",
    url: "https://phanhuutuan.com",
  }

  constructor() { }

  ngOnInit() {
  }

}
