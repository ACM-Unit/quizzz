import { registerLocaleData } from '@angular/common';
import {Question} from "../model/Question";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions: Question[] = [];
  questions$ = new BehaviorSubject<Question[]>(this.questions);
  finish: boolean = false;
  finish$ = new BehaviorSubject<boolean>(this.finish);
  currentQuestion: number = 0;
  private currentQuestion$ = new BehaviorSubject<number>(this.currentQuestion);

  constructor() {
    var questions = [];
    questions.push(new Question("With five World Cup wins, which country has taken home this top soccer prize the most times?", ["South Africa", "Germany", "Australia", "Brazil"], 3),
      new Question("Professional soccer players run about how far during every game?", ["500 yards", "1,500 yards", "6 miles", "3 miles"], 2),
      new Question("Now made of plastic and rubber, golf balls were once made of", ["wood", "clay", "lather", "aluminium"], 0),
      new Question("A bump or mound of hard snow on a ski slope is known as a", ["Spike", "Mogul", "Igloo", "Glacier"], 1),
      new Question("During the Wimbledon Championship in London, England, about how many tennis balls are used each year?", ["5,000", "10,000", "43,000", "54,000"], 3));
    this.setQuestions(questions);
  }

  setQuestions(questions: Question[]) {
    this.questions = questions;
    this.questions$.next(this.questions);
  }

  getQuestions(): Observable<Question[]> {
    return this.questions$.asObservable();
  }

  getCurrentQuestion(): Observable<number> {
    return this.currentQuestion$.asObservable();
  }

  setAnswer(answer: number): void {
    this.questions[this.currentQuestion].userAnswer = answer;
    this.questions$.next(this.questions);
  }

  setFinish(){
    this.finish = true;
    this.finish$.next(this.finish);
  }

  isFinished(): Observable<boolean> {
   return this.finish$;
  }

  incrementCurrentQuestion() {
    this.currentQuestion++;
    this.currentQuestion$.next(this.currentQuestion);
  }

  decrementCurrentQuestion() {
    this.currentQuestion--;
    this.currentQuestion$.next(this.currentQuestion);
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.incrementCurrentQuestion();
    } else {
      this.setFinish();
    }
  }

  prevQuestion(): void {
    if (this.currentQuestion > 0 && !this.finish) {
      this.decrementCurrentQuestion();
    }
  }

}
