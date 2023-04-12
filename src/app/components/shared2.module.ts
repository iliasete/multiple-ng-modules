import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { Component6Component } from './component6/component6.component';



@NgModule({
  declarations: [
    Component4Component,
    Component5Component,
    Component6Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Component4Component,
    Component5Component,
    Component6Component
  ]
})
export class Shared2Module { }
