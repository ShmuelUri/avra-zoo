import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildsCardComponent } from './wilds-card.component';

describe('WildsCardComponent', () => {
  let component: WildsCardComponent;
  let fixture: ComponentFixture<WildsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
