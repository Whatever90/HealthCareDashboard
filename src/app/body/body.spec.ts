import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { Body } from './body';

describe('Body', () => {
  let component: Body;
  let fixture: ComponentFixture<Body>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Body],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Body);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
