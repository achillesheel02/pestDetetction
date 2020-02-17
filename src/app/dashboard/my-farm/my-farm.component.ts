import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-farm',
  templateUrl: './my-farm.component.html',
  styleUrls: ['./my-farm.component.css']
})
export class MyFarmComponent implements OnInit {
  @Input() farms: any;
  constructor() { }

  ngOnInit() {
  }

}
