import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarKitComponent } from './criar-kit.component';

describe('CriarKitComponent', () => {
  let component: CriarKitComponent;
  let fixture: ComponentFixture<CriarKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
