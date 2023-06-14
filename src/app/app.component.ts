import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  showText = false
  username = ""
  password=""


  buttonOnClick() {
    console.log("tombol di klik");
    this.showText = !this.showText
    console.log(this.showText);
  }

  buttonSubmit() {
    this.showText = !this.showText
    console.log(this.showText);

    console.log(`${this.username} ${this.password}`);
  }
}
