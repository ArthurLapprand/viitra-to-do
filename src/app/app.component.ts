import { Component } from '@angular/core';
import { AppService } from "app/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  
  public items: Array<string>;

  public pos: 10;

  constructor (private appService: AppService) {

    this.items = [];

    for (let i = 0; i < 21; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  onclick(event){
    console.log(event)
    this.appService.addTask(event);
    this.items.push(event);
  }

  onscroll(event) {
    console.log("OnScroll: " + event);
  }
  
}
