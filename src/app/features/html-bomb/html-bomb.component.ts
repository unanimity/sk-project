import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-html-bomb',
  template: `here`,
  styleUrls: []
})
export class HtmlBombComponent implements OnInit, AfterViewInit {

  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

 setInterval(()=>{
   this.chaos(document.getElementsByTagName('body')[0])

 },100)



  }


  chaos(e: HTMLElement) {
    // console.log('>>', e.tagName);
    if (e.tagName === 'P' || e.tagName === 'H1' || e.tagName === 'H2' || e.tagName === 'H3' || e.tagName === 'A' || e.tagName === 'SPAN' || e.tagName === 'SPAN') {
      if (Number.parseInt(((e as HTMLElement)!.style.fontSize || '1px'.split('p')[0])) < 300){
        (e as HTMLElement)!.style.setProperty('font-size', (( Number.parseInt(((e as HTMLElement)!.style.fontSize || '1px'.split('p')[0]))  + 5).toString() + 'px'));
        (e as HTMLElement)!.style.setProperty('opacity', ((( Number.parseFloat(((e as HTMLElement)!.style.opacity || '1'))  - 0.1)).toString() ));
        console.log( (e as HTMLElement)!.style.opacity  );
      }
    }

    if (e.children)
      for (let i = 0; i < e!.children!.length; i++) {
        this.chaos(e.children[i] as HTMLElement);
      }
  }

}
