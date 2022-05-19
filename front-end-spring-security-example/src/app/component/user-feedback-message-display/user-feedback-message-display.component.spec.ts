import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbackMessageDisplayComponent } from './user-feedback-message-display.component';

describe('MissingDataMessageComponent', () => {
  let component: UserFeedbackMessageDisplayComponent;
  let fixture: ComponentFixture<UserFeedbackMessageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFeedbackMessageDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedbackMessageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
