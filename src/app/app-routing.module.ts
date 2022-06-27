import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageUnidadeConsumidoraComponent } from './pages/page-unidade-consumidora/page-unidade-consumidora.component';
import { PageCadastroDeEnergiaGeradaComponent } from './pages/page-cadastro-de-energia-gerada/page-cadastro-de-energia-gerada.component';
import { PageNovaUnidadeComponent } from './pages/page-nova-unidade/page-nova-unidade.component';
import { PageEditarUnidadeComponent } from './pages/page-editar-unidade/page-editar-unidade.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: PageDashboardComponent },
      { path: 'unidades', component: PageUnidadeConsumidoraComponent },
      { path: 'nova-unidade', component: PageNovaUnidadeComponent },
      { path: 'cadastro-energia-gerada', component: PageCadastroDeEnergiaGeradaComponent },
      { path: 'editar-unidade/:id', component: PageEditarUnidadeComponent }
    ]
  },
  {
    path: 'login',
    component: PageLoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
