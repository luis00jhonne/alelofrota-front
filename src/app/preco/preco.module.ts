import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtualizarPrecoComponent } from './atualizar-preco/atualizar-preco.component';
import { VerificarPrecoComponent } from './verificar-preco/verificar-preco.component';
import { CriarProgramacaoComponent } from './criar-programacao/criar-programacao.component';



@NgModule({
  declarations: [AtualizarPrecoComponent, VerificarPrecoComponent, CriarProgramacaoComponent],
  imports: [
    CommonModule
  ]
})
export class PrecoModule { }
