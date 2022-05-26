import {Question} from "./Question";

export class Quiz {
  questions: Question[];
  isFinished: boolean;

  constructor(questions: Question[], isFinished: boolean) {
    this.questions = questions;
    this.isFinished = isFinished;
  }
}
