import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageUnidadeConsumidoraComponent } from './pages/page-unidade-consumidora/page-unidade-consumidora.component';
import { PageCadastroDeEnergiaGeradaComponent } from './pages/page-cadastro-de-energia-gerada/page-cadastro-de-energia-gerada.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { PageNovaUnidadeComponent } from './pages/page-nova-unidade/page-nova-unidade.component';
import { PageEditarUnidadeComponent } from './pages/page-editar-unidade/page-editar-unidade.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageDashboardComponent,
    LayoutComponent,
    PageUnidadeConsumidoraComponent,
    PageCadastroDeEnergiaGeradaComponent,
    MenuLateralComponent,
    PageNovaUnidadeComponent,
    PageEditarUnidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
