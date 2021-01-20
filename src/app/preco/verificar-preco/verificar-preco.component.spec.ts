import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarPrecoComponent } from './verificar-preco.component';

describe('VerificarPrecoComponent', () => {
  let component: VerificarPrecoComponent;
  let fixture: ComponentFixture<VerificarPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
