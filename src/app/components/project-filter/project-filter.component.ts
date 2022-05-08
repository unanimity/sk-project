import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ProjectTag } from 'src/content/projects';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectFilterComponent implements AfterViewInit {
  @Input() tags!: any[];
  @Output() tag: EventEmitter<number> = new EventEmitter();

  public ProjectTag = ProjectTag

  constructor(private cd: ChangeDetectorRef) {
  }
  chose(index: number) {
    this.tag.emit(index);
    this.cd.detectChanges();
  }

  ngAfterViewInit(): void {
    this.tag.emit(0);
    this.cd.detectChanges();
  }
}
