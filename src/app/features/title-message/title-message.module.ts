import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleMessageComponent} from "./title-message.component";



@NgModule({
  declarations: [TitleMessageComponent],
  imports: [
    CommonModule
  ],
  exports:[TitleMessageComponent]
})
export class TitleMessageModule { }
