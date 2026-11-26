import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationCountService {
  private readonly unreadMessageCountSignal = signal(0);
  private readonly todayScheduleCountSignal = signal(0);

  readonly unreadMessageCount = this.unreadMessageCountSignal.asReadonly();
  readonly todayScheduleCount = this.todayScheduleCountSignal.asReadonly();

  setUnreadMessageCount(count: number): void {
    this.unreadMessageCountSignal.set(Math.max(0, count));
  }

  setTodayScheduleCount(count: number): void {
    this.todayScheduleCountSignal.set(Math.max(0, count));
  }
}
