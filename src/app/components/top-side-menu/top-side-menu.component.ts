import {Component} from '@angular/core';


@Component({
  selector: 'app-top-side-menu',
  templateUrl: './top-side-menu.component.html',
  styleUrls: ['./top-side-menu.component.scss']
})
export class TopSideMenuComponent {

  public items = [
    {title: 'About', id: '#about_me'},
    {title: 'Skills', id: '#skills'},
    {title: 'Projects', id: '#projects'},
    {title: 'Biography', id: '#biography'},
    {title: 'Contacts', id: '#contacts'},
  ];

}
