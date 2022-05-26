export class Question {
  caption: string;
  answers: string[];
  correctAnswer: number;
  userAnswer: number = -1;

  constructor(caption: string, answers: string[], correctAnswer: number) {
    this.caption = caption;
    this.answers = answers;
    this.correctAnswer = correctAnswer
  }
}
