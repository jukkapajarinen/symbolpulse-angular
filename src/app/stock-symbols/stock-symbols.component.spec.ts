import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSymbolsComponent } from './stock-symbols.component';

describe('StockSymbolsComponent', () => {
  let component: StockSymbolsComponent;
  let fixture: ComponentFixture<StockSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSymbolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
