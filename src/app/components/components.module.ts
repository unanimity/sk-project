import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicLayoutComponent} from "./basic-layout/basic-layout.component";
import {LeftSideMenuComponent} from './left-side-menu/left-side-menu.component';
import {TopSideMenuComponent} from './top-side-menu/top-side-menu.component';
import {LogoComponent} from './logo/logo.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {ProjectFilterComponent} from './project-filter/project-filter.component';
import {MoreComponent} from './more/more.component';
import {DonateModule} from "../features/donate/donate.module";


@NgModule({
  declarations: [BasicLayoutComponent, LeftSideMenuComponent, TopSideMenuComponent, LogoComponent, ProjectCardComponent, ProjectFilterComponent, MoreComponent],
  imports: [
    CommonModule,
    DonateModule
  ],
  exports: [BasicLayoutComponent, LeftSideMenuComponent, TopSideMenuComponent, LogoComponent, ProjectCardComponent, ProjectFilterComponent, MoreComponent]
})
export class ComponentsModule {
}
