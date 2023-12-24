import {Component} from '@angular/core';


@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent {

  public items = [
    {title: 'Skills', id: '#skills'},
    {title: 'Projects', id: '#projects'},
    {title: 'Biography', id: '#biography'},
    {title: 'Contacts', id: '#contacts'},
  ];
}
