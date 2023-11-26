import { Routes } from '@angular/router';
import { StockSymbolsComponent } from './stock-symbols/stock-symbols.component';

export const routes: Routes = [
  { path: 'stocks', component: StockSymbolsComponent },
  { path: 'forex-pairs', component: StockSymbolsComponent },
  { path: 'cryptocurrencies', component: StockSymbolsComponent },
  { path: 'etfs', component: StockSymbolsComponent },
  { path: 'indices', component: StockSymbolsComponent },
  { path: '**', redirectTo: '/stocks', pathMatch: 'full' },
];
