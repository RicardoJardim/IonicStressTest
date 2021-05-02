import { Injectable } from '@angular/core';

import {
  Plugins,
  FilesystemDirectory,
  FilesystemEncoding,
} from '@capacitor/core';

const { fileSystem } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class FilesystemService {
  constructor() {}

  public async fileWrite(path: string, data: string) {
    try {
      const result = await fileSystem.writeFile({
        path: `${path}.txt`,
        data,
        directory: FilesystemDirectory.Data,
        encoding: FilesystemEncoding.UTF8,
      });
      console.log('Wrote file', result.uri);
      alert(result.uri);
    } catch (e) {
      console.error('Unable to write file', e);
      alert(e);
    }
  }
}
