import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlterarEstoqueMinimoComponent } from './alterar-estoque-minimo/alterar-estoque-minimo.component';
import { VerificarEstoqueComponent } from './verificar-estoque/verificar-estoque.component';



@NgModule({
  declarations: [AlterarEstoqueMinimoComponent, VerificarEstoqueComponent],
  imports: [
    CommonModule
  ]
})
export class EstoqueModule { }
