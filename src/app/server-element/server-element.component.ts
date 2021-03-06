import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //view encapsulation CSS/None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement')
  element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Content Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Content Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Content Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Content Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Content Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Content Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Content Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Content Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
}
