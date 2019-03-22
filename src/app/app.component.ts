import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project for Moataz';
  public numbers: string[] = ['1', '2', '3'];
  public currentTime: Date;
  public s1 = false;
  public display(xox: string) {
    alert(xox + '   this what i want');
  }

  constructor() {
    setInterval(() => (this.currentTime = new Date()), 500);
  }
}
