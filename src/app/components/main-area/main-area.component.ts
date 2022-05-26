import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../model/Question";
import {Quiz} from "../../model/Quiz";

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  @Input("quiz")
  quiz: Quiz = new Quiz([], false);

  currentQuestion: number = 0;

  selectedAnswer: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  nextQuestion(): void {
     if (this.currentQuestion < this.quiz.questions.length) {
       this.currentQuestion ++;
     } else {
       this.quiz.isFinished = true;
     }
  }

  prevQuestion(): void {
    if (this.currentQuestion > 0 && !this.quiz.isFinished) {
      this.currentQuestion--;
    }
  }

  answer(answer: number): void {
    this.quiz.questions[this.currentQuestion].userAnswer = answer;
  }

  allCorrectAnswers(): number {
    return this.quiz.questions.filter(q => q.correctAnswer == q.userAnswer).length;
  }

}
