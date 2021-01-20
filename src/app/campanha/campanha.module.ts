import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarCobrancaComponent } from './criar-cobranca/criar-cobranca.component';
import { VerificarCobrancaComponent } from './verificar-cobranca/verificar-cobranca.component';



@NgModule({
  declarations: [CriarCobrancaComponent, VerificarCobrancaComponent],
  imports: [
    CommonModule
  ]
})
export class CampanhaModule { }
