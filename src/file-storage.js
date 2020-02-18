import { openDB } from '../web_modules/idb.js';

let singleton;

export class FileStorage extends EventTarget {
  constructor() {
    super();
    if (!singleton) {
      singleton = this;

      this.fileSelect = document.createElement("input");
      this.fileSelect.type = "file";

      this.dbPromise = openDB('file-store', 1, {
        upgrade(db) {
          db.createObjectStore('certificates');
          const tokensStore = db.createObjectStore('tokens', {
            keyPath: 'token'
          });
        },
      });
    }
    return singleton;
  }

  async chooseFileSystemEntriesFlat(opts) {
    const dir = opts && opts.type == 'openDirectory';

    // Use Native Filesystem API is avaiable.
    if ('chooseFileSystemEntries' in window) {
      const handle = await window.chooseFileSystemEntries(opts);
      if (dir) {
        const files = [];
        for await (const entry of handle.getEntries()) {
          if (entry.isFile) {
            files.push(await entry.getFile());
          }
        }
        return files;
      } else {
        return await handle.getFile();
      }
    }

    return new Promise(resolve => {
      const isAndroid = /Android/i.test(navigator.userAgent);
      if (!isAndroid) {
        this.fileSelect.webkitdirectory = dir;
      } else {
        // If set on Android we get no 'change' event.
        this.fileSelect.webkitdirectory = false;
      }
      this.fileSelect.addEventListener("change",
        _ => resolve(dir ? this.fileSelect.files : this.fileSelect.files[0]),
        { once: true }
      );
      this.fileSelect.click();
    });
  }

  async certificate() {
    return (await this.dbPromise).get('certificates', 1);
  }

  async chooseCertificate() {
    const entries = await this.chooseFileSystemEntriesFlat();
    const file = Array.isArray(entries) ? entries[0] : entries;
    const contents = await file.text();
    const res = (await this.dbPromise).put('certificates', contents, 1);
  }

  async chooseTokens() {
    const entries = await this.chooseFileSystemEntriesFlat();
    const file = Array.isArray(entries) ? entries[0] : entries;
    // const contents = await file.arrayBuffer();
    const contents = await file.text();
    const json = JSON.parse(contents);
    if (json.token) {
      const db = await this.dbPromise;
      await db.put('tokens', json);
    }
  }

  async tokens() {
    const db = await this.dbPromise;
    return await db.getAll('tokens');
  }

  async removeToken(token) {
    const db = await this.dbPromise;
    await db.delete('tokens', token)
  }
}