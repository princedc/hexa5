import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-acceleration-program',
  templateUrl: './acceleration-program.component.html',
  styleUrls: ['./acceleration-program.component.css']
})
export class AccelerationProgramComponent implements OnInit {

  private fragment: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
