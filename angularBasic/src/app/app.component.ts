import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBasic';

  name: string = 'ravi';
  disabled: boolean = true;

  flag: boolean = false;
  changeImg: string = "./assets/one.jpg";

  arr: string[] = ["./assets/one.jpg", "./assets/two.jpg", "./assets/one.jpg", "./assets/two.jpg"]

  getValue() {
    console.log(`The Title is ${this.title}`);
    return `The Title is ${this.title}`
  }

  funMouseEnter() {
    console.log('mouse enter')
  }

  funMouseOut() {
    console.log('mouse out')
  }

  buttonClick(refVar2: HTMLInputElement) {
    console.log(refVar2.value)
  }

  // changeImgs() {

  // this.changeImg = this.flag == true ? "./assets/one.jpg" : "./assets/two.jpg"
  // this.flag =! this.flag;

  // if (this.flag == true) {
  //   this.changeImg = "./assets/one.jpg";
  //   this.flag=false
  // }
  // else{
  //   this.changeImg = "./assets/two.jpg";
  //   this.flag=true
  // }
  //}

  imgOne(num: any) {
    this.changeImg = this.arr[num];
  }

  printVowels(key: string) {

    key = key[key.length - 1]

    if (key == 'a' || key == 'e' || key == 'i' || key == 'o' || key == 'u') {
      alert("This is vowel " + key);
      key = "";
    }
    else {
      alert("this is consonant " + key);
    }
  }

  color: string = "background-color: red;"

  changeColor() {
    this.color = this.flag == true ? "background-color: red;" : "background-color: green;"
    this.flag = !this.flag;
  }


  movies: Movie[] = [
    new Movie('Zootopia', 'Byron Howard, Rich Moore', 'Idris Elba, Ginnifer Goodwin, Jason Bateman', 'March 4, 2016'),

    new Movie('Batman v Superman: Dawn of Justice', 'Zack Snyder', 'Ben Affleck, Henry Cavill, Amy Adams', 'March 25, 2016'),

    new Movie('Captain American: Civil War', 'Anthony Russo, Joe Russo', 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', 'May 6, 2016')

  ]

  values!:string;

  getValues(val:string) {
    this.values=val;
  }


  toDate=new Date()
}

export class Movie {
  title: string;
  director: string;
  cast: string;
  releaseDate: string;

  constructor(title: string, director: string, cast: string, releaseDate: string) {
    this.title = title;
    this.director = director;
    this.cast = cast;
    this.releaseDate = releaseDate;
  }
}
