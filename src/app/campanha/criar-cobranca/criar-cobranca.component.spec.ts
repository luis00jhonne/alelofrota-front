import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCobrancaComponent } from './criar-cobranca.component';

describe('CriarCobrancaComponent', () => {
  let component: CriarCobrancaComponent;
  let fixture: ComponentFixture<CriarCobrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCobrancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
