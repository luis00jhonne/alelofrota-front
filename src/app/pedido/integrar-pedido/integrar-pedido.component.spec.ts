import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrarPedidoComponent } from './integrar-pedido.component';

describe('IntegrarPedidoComponent', () => {
  let component: IntegrarPedidoComponent;
  let fixture: ComponentFixture<IntegrarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrarPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
