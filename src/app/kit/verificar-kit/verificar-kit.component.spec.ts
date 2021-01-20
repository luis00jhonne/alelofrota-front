import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarKitComponent } from './verificar-kit.component';

describe('VerificarKitComponent', () => {
  let component: VerificarKitComponent;
  let fixture: ComponentFixture<VerificarKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
