import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MySymbolsService {
  selectedSymbols: any[] = [];

  constructor() {
    this.loadSelectedSymbols();
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
}
