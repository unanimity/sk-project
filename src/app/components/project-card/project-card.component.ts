import {Component, Input, OnInit} from '@angular/core';
import {IProject, ProjectTag} from "../../../content/projects";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  public  project!: IProject;

  public ProjectTag = ProjectTag

  constructor() { }

  ngOnInit(): void {

  }

}
