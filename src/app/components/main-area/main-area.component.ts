import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {Question} from "../../model/Question";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit, OnDestroy {

  sub = new Subscription();

  questions: Question[] = [];

  nextText: string = "next";

  isFinish: boolean = false;

  currentQuestion: number = 0;

  selectedAnswer: number = 0;


  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.sub.add(this.quizService.getQuestions().subscribe(questions => {
      this.questions = questions
    }));

    this.sub.add(this.quizService.getCurrentQuestion().subscribe(question => {
      this.currentQuestion = question;
    }));

    this.sub.add(this.quizService.isFinished().subscribe(finish => {
      this.isFinish = finish;
    }));
  }

  nextQuestion(): void {
    this.quizService.nextQuestion()
    if (this.currentQuestion == this.questions.length-1) {
      this.nextText = "finish";
    }
  }

  prevQuestion(): void {
   this.quizService.prevQuestion();
    if (this.currentQuestion == this.questions.length-1) {
      this.nextText = "finish";
    }
  }

  answer(answer: number): void {
    this.quizService.setAnswer(answer);
  }

  allCorrectAnswers(): number {
   return this.questions.filter(q => q.correctAnswer == q.userAnswer).length
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
