import {Component, Input, OnInit} from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() predictionsResult: any;
  pests = [
    'Papilio Demodocus',
    'Chilo Partellus',
    'Spodoptera',
    'Materna Linnaeus',
  ];
  private indexOfMaxValue: number;
  private myDataArray: any;


  constructor() { }

  ngOnInit() {
    this.indexOfMaxValue = this.predictionsResult.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    this.myDataArray = {...this.pests, ...this.predictionsResult};
  }

  pestPredictionValue() {
    return this.predictionsResult[this.indexOfMaxValue];
  }
  pestPrediction() {
    return this.pests[this.indexOfMaxValue];
  }



}
