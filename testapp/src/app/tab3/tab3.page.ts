import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { GpsService } from '../services/gps.service';
import { CalendarService } from '../services/calendar.service';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(
    private photoService: PhotoService,
    private gpsService: GpsService,
    private calendarService: CalendarService,
    private contactsService: ContactsService
  ) {}

  private onClickFunction = (args: any): void => {};

  private openCamera = async (args: any): Promise<void> => {
    this.photoService.addNewToGallery();
  };
  private openGallery = (args: any): void => {
    this.photoService.getGallery();
  };
  private openGps = (args: any): void => {
    this.gpsService.getCurrentPosition();
  };
  private openCalendar = (args: any): void => {
    this.calendarService.getCalendarList();
  };
  private openContacts = (args: any): void => {
    this.contactsService.getCalendarList();
  };
}
