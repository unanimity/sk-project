import {Component, OnInit} from '@angular/core';
import positions, {ELvl} from '../../../content/skills'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public  positions=positions;
  public  currentPosition=0;
  public ELvl  = ELvl;
  constructor() {
  }

  ngOnInit(): void {
  }

    getRandomId() {
    return Math.floor((Math.random()*3)+1);
  }
}
