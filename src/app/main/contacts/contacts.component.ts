import {Component, OnInit} from '@angular/core';
import {socialLinks, socialPages} from "../../../content/contacts";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public socialLinks = socialLinks;
  public socialPages = socialPages;

  constructor() {
  }

  ngOnInit(): void {
  }

}
