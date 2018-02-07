import { Component, OnInit } from '@angular/core';
import { Question } from './Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private colors: String[] = ["red", "yellow", "blue", "green", "purple", "orange"];
  private questions: Question[] = [];
  private selectedColor: string = "black";
  private selectedQuestion: Question = new Question("", "");
  private showAnswer: boolean = false;

  constructor() { }

  ngOnInit() {
    this.questions.push(new Question("The Lord prepares a way to obey His commandments", "1 Nephi 3:7"));
    this.questions.push(new Question("Adam fell that men might be", "2 Nephi 2:22-25"));
    this.questions.push(new Question("We are free to choose", "2 Nephi 2:27"));
    this.questions.push(new Question("All are alike unto God", "2 Nephi 26:33"));
    this.questions.push(new Question("God gives knowledge line upon line", "2 Nephi 28:30"));
    this.questions.push(new Question("If we feast upon the words of Christ, we can know all things that we should do", "2 Nephi 32:3"));
    this.questions.push(new Question("If we pray always, God will consecrate our performance for the welfare of our souls", "2 Nephi 32:8-9"));
    this.questions.push(new Question("By serving others we serve God", "Mosiah 2:17"));
    this.questions.push(new Question("Obedience brings blessings and happiness", "Mosiah 2:41"));
    this.questions.push(new Question("Put off the natural man and become a Saint through the Atonement", "Mosiah 3:19"));
    this.questions.push(new Question("Believe in God and that He has all wisdom", "Mosiah 4:9"));
    this.questions.push(new Question("Through baptism we enter a covenant with God", "Mosiah 18:8-10"));
    this.questions.push(new Question("Jesus Christ experienced our pains and overcame sin and death", "Alma 7:11-13"));
    this.questions.push(new Question("There must be an Atonement made", "Alma 34:9-10"));
    this.questions.push(new Question("Go no more after the lusts of your eyes", "Alma 39:9"));
    this.questions.push(new Question("Wickedness never was happiness", "Alma 41:10"));
    this.questions.push(new Question("Build your foundation on Christ", "Helaman 5:12"));
    this.questions.push(new Question("Jesus Christ suffered the will of the Father in all things", "3 Nephi 11:10-11"));
    this.questions.push(new Question("Jesus Christ invites us to become perfect", "3 Nephi 12:48"));
    this.questions.push(new Question("Watch and pray always in the name of Jesus Christ", "3 Nephi 18:15, 20-21"));
    this.questions.push(new Question("Be baptized and sanctified by receiving the Holy Ghost", "3 Nephi 27:20"));
    this.questions.push(new Question("A witness comes after the trial of faith", "Ether 12:6"));
    this.questions.push(new Question("The Savior can make weak things strong", "Ether 12:27"));
    this.questions.push(new Question("Charity is the pure love of Christ", "Moroni 7:45, 47-48"));
    this.questions.push(new Question("The Holy Ghost reveals truth to those who ask God with real intent", "Moroni 10:4-5"));
  }

  onColorClicked(c: string) {
    this.selectedColor = c;
    this.selectedQuestion = this.questions[Math.floor(Math.random()*this.questions.length)];
    let main = document.getElementById('maincontent');
    let modal = document.getElementById('QModal');
    if (modal && main) {
        main.style.filter = "blur(2px)";
        modal.style.display = "block";
        modal.style.backgroundColor = this.selectedColor;
    }
  }

  show() {
    this.showAnswer = true;
  }

  closeModal() {
    this.showAnswer = false;
    let main = document.getElementById('maincontent');
    let modal = document.getElementById('QModal');
    if (modal && main) {
        main.style.filter = "";
        modal.style.display = "none";
    }
  }
}
