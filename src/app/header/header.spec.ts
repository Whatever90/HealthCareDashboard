import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';
import { NavigationCountService } from '../navigation-count.service';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the unread message count in the navbar', () => {
    TestBed.inject(NavigationCountService).setUnreadMessageCount(3);
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.message-count') as HTMLElement | null;
    expect(badge?.textContent?.trim()).toBe('3');
    expect(badge?.getAttribute('aria-label')).toBe('3 unread messages');
  });

  it('hides the navbar badge when there are no unread messages', () => {
    TestBed.inject(NavigationCountService).setUnreadMessageCount(0);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#messages-icon + .message-count')).toBeNull();
  });

  it('shows the count of today’s schedule events', () => {
    TestBed.inject(NavigationCountService).setTodayScheduleCount(2);
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('#schedule-icon + .schedule-count') as HTMLElement | null;
    expect(badge?.textContent?.trim()).toBe('2');
    expect(badge?.getAttribute('aria-label')).toBe('2 schedule events today');
  });

  it('hides the schedule badge when there are no events today', () => {
    TestBed.inject(NavigationCountService).setTodayScheduleCount(0);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#schedule-icon + .schedule-count')).toBeNull();
  });
});
