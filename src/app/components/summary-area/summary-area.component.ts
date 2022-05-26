import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../model/Question";
import {Quiz} from "../../model/Quiz";

@Component({
  selector: 'app-summary-area',
  templateUrl: './summary-area.component.html',
  styleUrls: ['./summary-area.component.css']
})
export class SummaryAreaComponent implements OnInit {

  @Input("quiz")
  quiz: Quiz = new Quiz([], false);

  constructor() { }

  ngOnInit(): void {
  }

}
