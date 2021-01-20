import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './templates/dashboard/dashboard.component';
import {HomeComponent} from './home/home/home.component';
import {AlterarEstoqueMinimoComponent} from './estoque/alterar-estoque-minimo/alterar-estoque-minimo.component';
import {VerificarEstoqueComponent} from './estoque/verificar-estoque/verificar-estoque.component';
import {ListarCancelamentoComponent} from './pedido/listar-cancelamento/listar-cancelamento.component';
import {VerificarKitComponent} from './kit/verificar-kit/verificar-kit.component';
import {VerificarEnderecoComponent} from './pedido/verificar-endereco/verificar-endereco.component';
import {CriarCartaCreditoComponent} from './pedido/criar-carta-credito/criar-carta-credito.component';
import {IntegrarPedidoComponent} from './pedido/integrar-pedido/integrar-pedido.component';
import {DadosPedidoComponent} from './pedido/dados-pedido/dados-pedido.component';
import {CriarCobrancaComponent} from './campanha/criar-cobranca/criar-cobranca.component';
import {VerificarCobrancaComponent} from './campanha/verificar-cobranca/verificar-cobranca.component';
import {AtualizarPrecoComponent} from './preco/atualizar-preco/atualizar-preco.component';
import {VerificarPrecoComponent} from './preco/verificar-preco/verificar-preco.component';
import {CriarProgramacaoComponent} from './preco/criar-programacao/criar-programacao.component';
import {AtualizarLimiteComponent} from './cliente/atualizar-limite/atualizar-limite.component';
import {CriarKitComponent} from './kit/criar-kit/criar-kit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'alterar-estoque-minimo',
        component: AlterarEstoqueMinimoComponent
      },
      {
        path: 'verificar-estoque',
        component: VerificarEstoqueComponent
      },
      {
        path: 'listar-cancelamento',
        component: ListarCancelamentoComponent
      },
      {
        path: 'verificar-endereco',
        component: VerificarEnderecoComponent
      },
      {
        path: 'criar-carta-credito',
        component: CriarCartaCreditoComponent
      },
      {
        path: 'integrar-pedido',
        component: IntegrarPedidoComponent
      },
      {
        path: 'dados-pedido',
        component: DadosPedidoComponent
      },
      {
        path: 'criar-cobranca',
        component: CriarCobrancaComponent
      },
      {
        path: 'verificar-cobranca',
        component: VerificarCobrancaComponent
      },
      {
        path: 'atualizar-preco',
        component: AtualizarPrecoComponent
      },
      {
        path: 'verificar-preco',
        component: VerificarPrecoComponent
      },
      {
        path: 'criar-programacao',
        component: CriarProgramacaoComponent
      },
      {
        path: 'atualizar-limite',
        component: AtualizarLimiteComponent
      },
      {
        path: 'criar-kit',
        component: CriarKitComponent
      },
      {
        path: 'verificar-kit',
        component: VerificarKitComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
