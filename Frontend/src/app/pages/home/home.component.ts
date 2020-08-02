/*--------------------------------------------------
* @project PHP
* @file    .../home/home.component.ts
* --------------------------------------------------
* @Date:   2020-08-02 10:18:06
* @Author: Phan Huu Tuan | pi.huutuan@gmail.com
* 
* @Last Modified by:   Phan Huu Tuan
* @Last Modified time: 2020-08-02 12:20:21
* --------------------------------------------------*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  props = {
    title: "Home page",
    subTitle: "Enter the data to transfer data to the info page",
  }

  public contents = [
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

  dataSubmit = {
    id: null,
    placeholder: '',
    actionName: '',
    message: '',
  }

  constructor(private router : Router, private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getInfo().subscribe((data)=>{
      console.log('getInfo', data);
      
    });
  }

  onCheckData(id) {
    if(this.contents[id - 1].message.length > 0) {
      this.contents[id - 1].disabledAction = null;
    } else {
      this.contents[id - 1].disabledAction = true;
    }

    //console.log('here', id, this.contents);
  }

  getDataSubmmit(id) {
    this.dataSubmit = this.contents[id - 1];
  }

  goToInfo() {
    let data: object = {
      content: this.dataSubmit.message,
    }
    this.apiService.updateInfo(this.dataSubmit.id, data).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
    this.router.navigateByUrl('/info', { state: {'results': this.contents} });
  }

}
