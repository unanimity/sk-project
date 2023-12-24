import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ProjectsComponent} from './projects/projects.component';
import {BiographyComponent} from './biography/biography.component';
import {SkillsComponent} from './skills/skills.component';
import {ComponentsModule} from "../components/components.module";
import {TitleMessageModule} from "../features/title-message/title-message.module";
import {HtmlBombModule} from "../features/html-bomb/html-bomb.module";


@NgModule({
  declarations: [
    LandingComponent,
    AboutMeComponent,
    ContactsComponent,
    ProjectsComponent,
    BiographyComponent,
    SkillsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    TitleMessageModule,
    HtmlBombModule
  ]
})
export class LandingModule {
}
