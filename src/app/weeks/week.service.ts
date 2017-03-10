import { Injectable } from '@angular/core';

import { LocalStorageService } from '../services/localStorage.service';

import { Week } from './week';
import { WEEKS } from './mock-weeks';

@Injectable()
export class WeekService extends LocalStorageService {
  constructor() {
    super();
    this.localStorageName = 'weeks';
    this.defaultData = [].concat(WEEKS);
  }

  getWeeks(): Promise<Week[]> {
    return Promise.resolve(this.getLocalStorage());
  }

  getWeek(id: number): Promise<Week> {
    return this.getWeeks()
        .then(weeks => weeks.find(week => week.id === id));
  }

  saveWeek(week: Week): void {
    const weeks: Week[] = this.getLocalStorage();
    const index: number =  weeks.findIndex(m => m.id === week.id);
    if(index > -1) {
      weeks[index] = week;
    } else {
      weeks.push(week);
    }
    this.saveLocalStorage(weeks);
  }
}
