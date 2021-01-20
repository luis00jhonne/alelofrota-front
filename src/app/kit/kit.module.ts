import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarKitComponent } from './criar-kit/criar-kit.component';
import { VerificarKitComponent } from './verificar-kit/verificar-kit.component';



@NgModule({
  declarations: [CriarKitComponent, VerificarKitComponent],
  imports: [
    CommonModule
  ]
})
export class KitModule { }
