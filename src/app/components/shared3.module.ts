import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component7Component } from './component7/component7.component';
import { Component8Component } from './component8/component8.component';
import { Component9Component } from './component9/component9.component';



@NgModule({
  declarations: [
    Component7Component,
    Component8Component,
    Component9Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Component7Component,
    Component8Component,
    Component9Component
  ]
})
export class Shared3Module { }
