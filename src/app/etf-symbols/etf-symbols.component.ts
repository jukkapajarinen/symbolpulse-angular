import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MySymbolsService } from '../my-symbols.service';

@Component({
  selector: 'app-etf-symbols',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etf-symbols.component.html',
  styleUrl: './etf-symbols.component.css',
})
export class ETFSymbolsComponent implements OnInit {
  apiUrl: string = 'https://api.twelvedata.com/etf';
  symbols: any[] = [];
  displayedSymbols: any[] = [];
  itemsPerPage: number = 20;
  currentPage: number = 1;
  pageCount: number = 0;

  constructor(
    private http: HttpClient,
    private MySymbolsService: MySymbolsService
  ) {}

  ngOnInit() {
    this.fetchSymbols();
    this.MySymbolsService.loadSelectedSymbols();
  }

  fetchSymbols() {
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        this.symbols = data.data;
        this.pageCount = Math.ceil(this.symbols.length / this.itemsPerPage);
        this.updateDisplayedSymbols();
      },
      (error) => {
        console.error('Error fetching symbols:', error);
      }
    );
  }

  updateDisplayedSymbols() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedSymbols = this.symbols.slice(startIndex, endIndex);
  }

  toggleSelect(symbol: any) {
    // Check if the symbol is already selected
    const index = this.MySymbolsService.selectedSymbols.findIndex(
      (selectedSymbol) => selectedSymbol.symbol === symbol.symbol
    );

    // If selected, remove it; otherwise, add it to the array
    if (index !== -1) {
      this.MySymbolsService.selectedSymbols.splice(index, 1);
    } else {
      this.MySymbolsService.selectedSymbols.push(symbol);
    }

    // Save selected symbols to localStorage
    this.MySymbolsService.saveSelectedSymbols();
  }

  isSymbolSelected(symbol: any): boolean {
    return this.MySymbolsService.selectedSymbols.some(
      (selectedSymbol) => selectedSymbol.symbol === symbol.symbol
    );
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updateDisplayedSymbols();
  }
}
