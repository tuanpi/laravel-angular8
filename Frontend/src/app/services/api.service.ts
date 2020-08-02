/*--------------------------------------------------
* @project PHP
* @file    .../services/api.service.ts
* --------------------------------------------------
* @Date:   2020-08-02 11:34:27
* @Author: Phan Huu Tuan | pi.huutuan@gmail.com
* 
* @Last Modified by:   Phan Huu Tuan
* @Last Modified time: 2020-08-02 12:22:20
* --------------------------------------------------*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getInfo(){
    return this.httpClient.get(`http://localhost:8000/api/v1/info`);
  }

  public updateInfo(id, data: object){
    console.log('update', id, data);
    return this.httpClient.put(`http://localhost:8000/api/v1/info/` + id, data);
  }
}