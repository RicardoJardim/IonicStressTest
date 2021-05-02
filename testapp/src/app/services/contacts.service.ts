/* eslint-disable @typescript-eslint/prefer-for-of */
import { Injectable } from '@angular/core';
import { Contacts, ContactFindOptions } from '@ionic-native/contacts/ngx';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private contacts: Contacts) {}

  public async getCalendarList() {
    const options = new ContactFindOptions();
    options.filter = '';
    options.multiple = true;

    this.contacts.find(['displayName', 'name'], options).then(
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
      list += contacts[i].displayName + '\n';
    }
    alert(list);
  }

  private onError(contactError) {
    alert('onError! ' + contactError.toString());
  }
}
