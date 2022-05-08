import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public  chaos =false;

  constructor() { }

  ngOnInit(): void {
  }

}
