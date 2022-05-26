import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../model/Quiz";

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  @Input("quiz")
  quiz: Quiz = new Quiz([], false);

  nextText: string = "next";

  currentQuestion: number = 0;

  selectedAnswer: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  nextQuestion(): void {
     if (this.currentQuestion < this.quiz.questions.length-1) {
       this.currentQuestion ++;
     } else {
       this.quiz.isFinished = true;
     }
    if (this.currentQuestion == this.quiz.questions.length-1) {
      this.nextText = "finish";
    }
  }

  prevQuestion(): void {
    if (this.currentQuestion > 0 && !this.quiz.isFinished) {
      this.currentQuestion--;
    }
    if (this.currentQuestion == this.quiz.questions.length-1) {
      this.nextText = "finish";
    }
  }

  answer(answer: number): void {
    this.quiz.questions[this.currentQuestion].userAnswer = answer;
  }

  allCorrectAnswers(): number {
    return this.quiz.questions.filter(q => q.correctAnswer == q.userAnswer).length;
  }

}
