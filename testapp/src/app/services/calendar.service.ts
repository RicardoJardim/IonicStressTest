/* eslint-disable @typescript-eslint/prefer-for-of */
import { Injectable } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private calendar: Calendar) {}

  public async getCalendarList() {
    this.calendar.listCalendars().then(
      (msg) => {
        console.log(msg);
        this.onSuccess(msg);
      },
      (err) => {
        console.log(err);
        this.onError(err);
      }
    );
  }

  private onSuccess(contacts) {
    let list = '';

    for (let i = 0; i < contacts.length; i++) {
      console.log(contacts[i]);
      list += contacts[i] + '\n';
    }
    console.log(list);
  }

  private onError(contactError) {
    console.log('onError! ' + contactError.toString());
  }
}
