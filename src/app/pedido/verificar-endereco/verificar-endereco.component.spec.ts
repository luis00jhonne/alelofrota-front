import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarEnderecoComponent } from './verificar-endereco.component';

describe('VerificarEnderecoComponent', () => {
  let component: VerificarEnderecoComponent;
  let fixture: ComponentFixture<VerificarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
