import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCartaCreditoComponent } from './criar-carta-credito.component';

describe('CriarCartaCreditoComponent', () => {
  let component: CriarCartaCreditoComponent;
  let fixture: ComponentFixture<CriarCartaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCartaCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCartaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
