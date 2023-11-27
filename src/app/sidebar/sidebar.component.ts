import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySymbolsService } from '../my-symbols.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  appTitle: string = 'Symbolpulse';
  selectedSymbols: any[] = [];

  constructor(protected MySymbolsService: MySymbolsService) {}

  ngOnInit(): void {
    this.MySymbolsService.loadSelectedSymbols();
  }
}
