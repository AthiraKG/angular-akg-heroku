import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoDetailsComponent } from './wo-details.component';

describe('WoDetailsComponent', () => {
  let component: WoDetailsComponent;
  let fixture: ComponentFixture<WoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
