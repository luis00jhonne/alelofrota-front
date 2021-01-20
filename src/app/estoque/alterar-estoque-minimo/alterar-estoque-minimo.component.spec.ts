import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEstoqueMinimoComponent } from './alterar-estoque-minimo.component';

describe('AlterarEstoqueMinimoComponent', () => {
  let component: AlterarEstoqueMinimoComponent;
  let fixture: ComponentFixture<AlterarEstoqueMinimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarEstoqueMinimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarEstoqueMinimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
