/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class GpsService {
  constructor() {}

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    alert(coordinates.coords.longitude + ' ' + coordinates.coords.latitude);
  }
}
