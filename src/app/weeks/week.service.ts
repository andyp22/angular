import { Injectable } from '@angular/core';

import { Week } from './week';
import { WEEKS } from './mock-weeks';

@Injectable()
export class WeekService {
  LOCAL_STORAGE_NAME = 'weeks';
  saved: Week[] = [];

  getWeeks(): Promise<Week[]> {
    return Promise.resolve(this.getLocalStorageWeeks());
  }

  getWeek(id: number): Promise<Week> {
    return this.getWeeks()
        .then(weeks => weeks.find(week => week.id === id));
  }

  saveWeek(week: Week): void {
    const weeks: Week[] = this.getLocalStorageWeeks();
    const index: number =  weeks.findIndex(m => m.id === week.id);
    if(index > -1) {
      weeks[index] = week;
    } else {
      weeks.push(week);
    }
    this.saveLocalStorageWeeks(weeks);
  }

  getLocalStorageWeeks(): Week[] {
    this.saved = (localStorage.getItem(this.LOCAL_STORAGE_NAME) !== null) ?
      JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_NAME)) : [].concat(WEEKS);
    return this.saved;
  }

  saveLocalStorageWeeks(weeks: Week[]): void {
    localStorage.setItem(this.LOCAL_STORAGE_NAME, JSON.stringify(weeks));
  }
}
