import { Component } from '@angular/core';
import {Question} from "./model/Question";
import {Quiz} from "./model/Quiz";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  question1: Question = new Question("With five World Cup wins, which country has taken home this top soccer prize the most times?", ["South Africa", "Germany", "Australia", "Brazil"], 3);
  question2: Question = new Question("Professional soccer players run about how far during every game?", ["500 yards", "1,500 yards", "6 miles", "3 miles"], 2);
  question3: Question = new Question("Now made of plastic and rubber, golf balls were once made of", ["wood", "clay", "lather", "aluminium"], 0);
  question4: Question = new Question("A bump or mound of hard snow on a ski slope is known as a", ["Spike", "Mogul", "Igloo", "Glacier"], 1);
  question5: Question = new Question("During the Wimbledon Championship in London, England, about how many tennis balls are used each year?", ["5,000", "10,000", "43,000", "54,000"], 3);
  questions: Question[] = [this.question1, this.question2, this.question3, this.question4, this.question5];

  quiz: Quiz = new Quiz(this.questions, false);
  // actions

}
