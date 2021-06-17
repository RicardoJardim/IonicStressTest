import { Injectable } from '@angular/core';

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root',
})
export class FilesystemService {
  constructor() {}

  public async fileWrite(path: string, data: string) {
    try {
      const result = await Filesystem.writeFile({
        path: `${path}.txt`,
        data,
        directory: Directory.Data,
        encoding: Encoding.UTF8,
      });
      console.log('Wrote file', result.uri);
      console.log(result.uri);
    } catch (e) {
      console.error('Unable to write file', e);
      console.log(e);
    }
  }
}
