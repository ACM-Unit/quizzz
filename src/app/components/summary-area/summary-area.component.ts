import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {Question} from "../../model/Question";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-summary-area',
  templateUrl: './summary-area.component.html',
  styleUrls: ['./summary-area.component.css']
})
export class SummaryAreaComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  isFinish: boolean = false;
  sub = new Subscription();

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.sub.add(this.quizService.getQuestions().subscribe(questions => {
      this.questions = questions
    }));

    this.sub.add(this.quizService.isFinished().subscribe(finish => {
      this.isFinish = finish;
    }));

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
