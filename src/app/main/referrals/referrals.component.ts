import {Component, OnInit} from '@angular/core';
import {socialLinks, socialPages} from "../../../content/contacts";
import Referrals from "../../../content/referrals";


@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {
  public socialLinks = socialLinks;
  public socialPages = socialPages;

  constructor() {
  }

  ngOnInit(): void {
  }

  protected readonly referrals = Referrals;
}
