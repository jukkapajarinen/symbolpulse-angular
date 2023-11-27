import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SymbolsComponent } from './symbols/symbols.component';
import { MySymbolsService } from './my-symbols.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, SymbolsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private MySymbolsService: MySymbolsService) {}

  ngOnInit(): void {
    this.MySymbolsService.loadSelectedSymbols();
  }
}
