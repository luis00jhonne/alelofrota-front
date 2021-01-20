import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProgramacaoComponent } from './criar-programacao.component';

describe('CriarProgramacaoComponent', () => {
  let component: CriarProgramacaoComponent;
  let fixture: ComponentFixture<CriarProgramacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarProgramacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarProgramacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
