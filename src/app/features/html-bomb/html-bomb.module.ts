import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HtmlBombComponent} from "./html-bomb.component";


@NgModule({
  declarations: [HtmlBombComponent],
  imports: [
    CommonModule
  ], exports: [HtmlBombComponent]
})
export class HtmlBombModule {
}
