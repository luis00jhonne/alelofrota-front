import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarCobrancaComponent } from './verificar-cobranca.component';

describe('VerificarCobrancaComponent', () => {
  let component: VerificarCobrancaComponent;
  let fixture: ComponentFixture<VerificarCobrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarCobrancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
