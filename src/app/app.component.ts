import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TwelveDataService } from './twelve-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'symbolpulse';
  symbols: any[] = [];
  displayedSymbols: any[] = [];
  itemsPerPage = 20;
  currentPage = 1;
  pageCount: number = 0;

  constructor(private twelveDataService: TwelveDataService) {}

  ngOnInit() {
    this.fetchSymbols();
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

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updateDisplayedSymbols();
  }
}
