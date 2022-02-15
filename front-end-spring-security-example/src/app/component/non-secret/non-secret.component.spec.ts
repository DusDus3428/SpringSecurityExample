import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSecretComponent } from './non-secret.component';

describe('NonSecretComponent', () => {
  let component: NonSecretComponent;
  let fixture: ComponentFixture<NonSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonSecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
