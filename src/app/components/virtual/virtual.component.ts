import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport, { static: false }  ) viewport: CdkVirtualScrollViewport;

  personas:any = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  goEnd(){
    this.viewport.scrollToIndex(this.personas.length);
  }

  goStart(){
    this.viewport.scrollToIndex(0);
  }

  goMiddle(){
    this.viewport.scrollToIndex(this.personas.length/2);

  }

}
