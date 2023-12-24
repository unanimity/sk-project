import {Component,} from '@angular/core';
import bio from '../../../content/biograthy';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss'],
})
export class BiographyComponent {

  public page = 0;

  public isMore: boolean = false;


  get bio() {
    return bio.slice(0, this.isMore ? bio.length : bio.indexOf('►')).replace('►', '')
  }

}
