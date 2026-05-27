import { Component, Input, OnInit } from '@angular/core';
const SELECTED_RESULT_KEY = '';
@Component({
  selector: 'lab-results',
  imports: [],
  templateUrl: './lab-results.html',
  styleUrl: './lab-results.css',
})

export class LabResults implements OnInit {
  @Input() results: string[] | null = [];
  selectedResult: string | null = null;
  ngOnInit() {
    console.log('LabResults ngOnInit called with results:', this.results, SELECTED_RESULT_KEY, this.results?.includes(SELECTED_RESULT_KEY));
    if (this.results && this.results.includes(SELECTED_RESULT_KEY)) {
      console.log("Setting selectedResult to:", SELECTED_RESULT_KEY);
      this.selectedResult = SELECTED_RESULT_KEY;
    }
  }
}