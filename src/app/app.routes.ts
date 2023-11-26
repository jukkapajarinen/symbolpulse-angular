import { Routes } from '@angular/router';
import { CryptoSymbolsComponent } from './crypto-symbols/crypto-symbols.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ETFSymbolsComponent } from './etf-symbols/etf-symbols.component';
import { ForexSymbolsComponent } from './forex-symbols/forex-symbols.component';
import { IndicesSymbolsComponent } from './indices-symbols/indices-symbols.component';
import { StockSymbolsComponent } from './stock-symbols/stock-symbols.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'stocks', component: StockSymbolsComponent },
  { path: 'forex', component: ForexSymbolsComponent },
  { path: 'crypto', component: CryptoSymbolsComponent },
  { path: 'etfs', component: ETFSymbolsComponent },
  { path: 'indices', component: IndicesSymbolsComponent },
  { path: '**', redirectTo: '/stocks', pathMatch: 'full' },
];
