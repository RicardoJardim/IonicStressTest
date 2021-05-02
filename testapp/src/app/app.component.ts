import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

// myFunc():any{}; <- Don't change UI. Recomended for Pages
// myFunc = (): any => {} <- Change UI. Recomended for Method of Classes or Components
