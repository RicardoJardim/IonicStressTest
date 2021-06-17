/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const imageUrl = capturedPhoto.webPath;
    // Can be set to the src of an image now
    alert(imageUrl);
  }

  public async getGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100,
    });
    const imageUrl = capturedPhoto.webPath;
    // Can be set to the src of an image now
    console.log(imageUrl);
    alert(imageUrl);
  }
}
