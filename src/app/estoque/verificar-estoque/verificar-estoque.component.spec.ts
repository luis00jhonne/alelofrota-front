import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarEstoqueComponent } from './verificar-estoque.component';

describe('VerificarEstoqueComponent', () => {
  let component: VerificarEstoqueComponent;
  let fixture: ComponentFixture<VerificarEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
