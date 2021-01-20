import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarLimiteComponent } from './atualizar-limite.component';

describe('AtualizarLimiteComponent', () => {
  let component: AtualizarLimiteComponent;
  let fixture: ComponentFixture<AtualizarLimiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarLimiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarLimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
