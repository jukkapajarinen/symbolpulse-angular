import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TwelveDataService } from './twelve-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  appTitle: string = 'SymbolPulse'; // Set the app title here
  symbols: any[] = [];
  displayedSymbols: any[] = [];
  itemsPerPage = 20;
  currentPage = 1;
  pageCount: number = 0;
  selectedSymbols: any[] = [];

  constructor(private twelveDataService: TwelveDataService) {}

  ngOnInit() {
    this.fetchSymbols();
    this.loadSelectedSymbols();
  }

  fetchSymbols() {
    this.twelveDataService.getSymbols().subscribe(
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
    const index = this.selectedSymbols.findIndex(
      (selectedSymbol) => selectedSymbol.symbol === symbol.symbol
    );

    // If selected, remove it; otherwise, add it to the array
    if (index !== -1) {
      this.selectedSymbols.splice(index, 1);
    } else {
      this.selectedSymbols.push(symbol);
    }

    // Save selected symbols to localStorage
    this.saveSelectedSymbols();
  }

  isSelected(symbol: any): boolean {
    return this.selectedSymbols.some(
      (selectedSymbol) => selectedSymbol.symbol === symbol.symbol
    );
  }

  saveSelectedSymbols() {
    localStorage.setItem(
      'selectedSymbols',
      JSON.stringify(this.selectedSymbols)
    );
  }

  loadSelectedSymbols() {
    const savedSymbols = localStorage.getItem('selectedSymbols');
    if (savedSymbols) {
      this.selectedSymbols = JSON.parse(savedSymbols);
    }
  }

  removeSelectedSymbol(selectedSymbol: any) {
    // Remove the selected symbol from the array
    const index = this.selectedSymbols.indexOf(selectedSymbol);
    if (index !== -1) {
      this.selectedSymbols.splice(index, 1);
    }
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updateDisplayedSymbols();
  }
}
