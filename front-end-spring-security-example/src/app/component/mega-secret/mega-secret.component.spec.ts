import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaSecretComponent } from './mega-secret.component';

describe('MegaSecretComponent', () => {
  let component: MegaSecretComponent;
  let fixture: ComponentFixture<MegaSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaSecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
