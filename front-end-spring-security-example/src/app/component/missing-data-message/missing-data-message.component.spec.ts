import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingDataMessageComponent } from './missing-data-message.component';

describe('MissingDataMessageComponent', () => {
  let component: MissingDataMessageComponent;
  let fixture: ComponentFixture<MissingDataMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingDataMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingDataMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
