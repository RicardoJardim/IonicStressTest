import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  result = 0;
  constructor() {}

  onClickFunction = (args: any): void => {
    //$.label.text = 'Result = ' + 0;
    this.result = 0;
    console.log(new Date());
    let result = 0;
    for (let j = 1; j <= 5; j++) {
      for (let k = 1; k <= 100000; k++) {
        result +=
          Math.log2(k) + (3 * k) / (2 * j) + Math.sqrt(k) + Math.pow(k, j - 1);
      }
    }
    console.log(new Date());
    this.result = result;
  };
}
