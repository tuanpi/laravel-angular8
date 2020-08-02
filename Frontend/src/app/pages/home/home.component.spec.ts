/*--------------------------------------------------
* @project PHP
* @file    .../home/home.component.spec.ts
* --------------------------------------------------
* @Date:   2020-08-02 02:12:38
* @Author: Phan Huu Tuan | pi.huutuan@gmail.com
* 
* @Last Modified by:   Phan Huu Tuan
* @Last Modified time: 2020-08-02 10:23:09
* --------------------------------------------------*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
