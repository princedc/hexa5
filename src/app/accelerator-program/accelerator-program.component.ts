import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-accelerator-program',
  templateUrl: './accelerator-program.component.html',
  styleUrls: ['./accelerator-program.component.css']
})
export class AcceleratorProgramComponent implements OnInit {
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
