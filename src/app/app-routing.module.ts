import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
//só importar o modulo se NÃ FOR USAR LAZY LOADING. Se for usar, o import é dentro de loadChildrem() =>


const routes: Routes = [
  { path: 'produtos', loadChildren: () => 
    import('./produtos/produtos.module').then(m => m.ProdutosModule)},
  { path: '', redirectTo: 'produtos', pathMatch: 'full'},
  { path: '**', component: NaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
