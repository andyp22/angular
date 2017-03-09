import { Injectable } from '@angular/core';

import { Week } from './week';
import { WEEKS } from './mock-weeks';

@Injectable()
export class WeekService {
  getWeeks(): Promise<Week[]> {
    return Promise.resolve([].concat(WEEKS));
  }

  getWeek(id: number): Promise<Week> {
    return this.getWeeks()
        .then(weeks => weeks.find(week => week.id === id));
  }
}
