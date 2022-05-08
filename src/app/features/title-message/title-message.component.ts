import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-message',
  templateUrl: './title-message.component.html',
  styleUrls: ['./title-message.component.scss']
})
export class TitleMessageComponent implements OnInit {
public  text_content: String='';
private content_list: string[] = ['engineer', 'programmer', 'tourist', 'friend', 'tourist', 'dreamer','master'];
private time_interval = 350;
private pause = 3;

  constructor() {

  }

  ngOnInit() {
    let current_item = 0;
    let tmp_i = 0;
    let tmp_pause = 0;
        setInterval(() => {
          if (tmp_pause <= 0) {
          this.text_content =  this.content_list[current_item].slice(0, tmp_i);
          tmp_i = 1 + tmp_i;
          if (tmp_i > this.content_list[current_item].length) {
            tmp_i = 0;
            current_item = current_item + 1;
            if (current_item > this.content_list.length - 1) {
                current_item = 0;
              }
              tmp_pause = this.pause;
          }
        } else {tmp_pause = tmp_pause - 1; }
        }, this.time_interval);
  }
}
