import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCancelamentoComponent } from './listar-cancelamento/listar-cancelamento.component';
import { VerificarEnderecoComponent } from './verificar-endereco/verificar-endereco.component';
import { CriarCartaCreditoComponent } from './criar-carta-credito/criar-carta-credito.component';
import { IntegrarPedidoComponent } from './integrar-pedido/integrar-pedido.component';
import { DadosPedidoComponent } from './dados-pedido/dados-pedido.component';



@NgModule({
  declarations: [ListarCancelamentoComponent, VerificarEnderecoComponent, CriarCartaCreditoComponent, IntegrarPedidoComponent, DadosPedidoComponent],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
