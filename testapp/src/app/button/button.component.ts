import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input() name: string;

  @Input() public callbackFunction: (args: any) => void;

  constructor() {}

  ngOnInit() {}

  onclickFunction(args: any): void {
    this.callbackFunction(args);
  }
}
