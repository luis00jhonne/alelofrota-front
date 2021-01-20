import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCancelamentoComponent } from './listar-cancelamento.component';

describe('ListarCancelamentoComponent', () => {
  let component: ListarCancelamentoComponent;
  let fixture: ComponentFixture<ListarCancelamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCancelamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCancelamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
