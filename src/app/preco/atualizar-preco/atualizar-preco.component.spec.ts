import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPrecoComponent } from './atualizar-preco.component';

describe('AtualizarPrecoComponent', () => {
  let component: AtualizarPrecoComponent;
  let fixture: ComponentFixture<AtualizarPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
