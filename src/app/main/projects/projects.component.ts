import {Component, OnInit} from '@angular/core';

import projects, {ProjectTag} from '../../../content/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public tags = [
    ProjectTag.All,
    ProjectTag.Website,
    ProjectTag.Desktop,
    ProjectTag.Mobile,
    ProjectTag.Engineer,
    ProjectTag.Social,];

  public tag = ProjectTag.All;
  public isMore: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  get projects() {
    return projects.filter((p) => p.tags.includes(this.tag) || this.tag === 0)
  }

  onFilter(event: number) {
    this.tag = event;
  }
}
