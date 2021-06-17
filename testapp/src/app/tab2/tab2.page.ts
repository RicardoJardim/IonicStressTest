import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilesystemService } from '../services/filesystem.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  users: string;
  banks: string;
  btns: number[] = [];
  views: number[] = [];
  constructor(private http: HttpClient, private filesystem: FilesystemService) {
    this.users = '';
    this.banks = '';
  }

  private prepareDataRequest(url: string): Observable<any> {
    // Define the data URL
    const dataUrl = 'https://random-data-api.com/api/' + url;
    // Prepare the request
    return this.http.get(dataUrl);
  }

  private onClickFunction = (args: any): void => {
    console.log(new Date());

    this.prepareDataRequest('users/random_user?size=100').subscribe((data) => {
      // Set the data to display in the template
      this.users = JSON.stringify(data);
      console.log(this.users);
      this.filesystem.fileWrite('users', this.users);
    });
    this.prepareDataRequest('bank/random_bank?size=100').subscribe((data) => {
      // Set the data to display in the template
      this.banks = JSON.stringify(data);
      this.filesystem.fileWrite('banks', this.users);
    });
  };

  private createViews = (): void => {
    console.log(new Date());
    this.btns = [];
    this.views = Array(1000);
    console.log(new Date());
  };

  private createBtns = (): void => {
    console.log(new Date());
    this.btns = [];
    this.btns = Array(1000);
    console.log(new Date());
  };
}
