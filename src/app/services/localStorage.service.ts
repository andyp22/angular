import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class LocalStorageService implements OnInit {
  localStorageName: string;
  saved: any[] = [];
  defaultData: any[] = [];
  id_ctr: number;

  constructor() {}

  ngOnInit(): void {
    const ctrName = `${this.localStorageName}_id-ctr`;
    this.id_ctr = (localStorage.getItem(ctrName) !== null) ?
      JSON.parse(localStorage.getItem(ctrName)) : this._determineIdValue();
  }

  _determineIdValue(): number {
    const ls: any[] = this.getLocalStorage();
    ls.sort(this.sortById);
    return (ls.length) ? ls[ls.length - 1].id + 1 : 101;
  }

  sortById(a: any, b: any): number {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  getLocalStorage(): any[] {
    this.saved = (localStorage.getItem(this.localStorageName) !== null) ?
      JSON.parse(localStorage.getItem(this.localStorageName)) : [].concat(this.defaultData);
    return this.saved;
  }

  saveLocalStorage(data: any[]): void {
    localStorage.setItem(this.localStorageName, JSON.stringify(data));
  }
}
