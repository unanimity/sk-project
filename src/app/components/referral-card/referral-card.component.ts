import {Component, Input, OnInit} from '@angular/core';
import {IReferral} from "../../../content/referrals";

@Component({
  selector: 'app-referral-card',
  templateUrl: './referral-card.component.html',
  styleUrls: ['./referral-card.component.scss']
})
export class ReferralCardComponent implements OnInit {

  @Input()
  public referral!: IReferral;


  constructor() {
  }

  ngOnInit(): void {

  }

}
