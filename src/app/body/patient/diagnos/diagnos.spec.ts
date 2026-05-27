import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagnos } from './diagnos';

describe('Diagnos', () => {
  let component: Diagnos;
  let fixture: ComponentFixture<Diagnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diagnos],
    }).compileComponents();

    fixture = TestBed.createComponent(Diagnos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
