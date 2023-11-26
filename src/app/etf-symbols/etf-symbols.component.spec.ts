import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETFSymbolsComponent } from './etf-symbols.component';

describe('etfSymbolsComponent', () => {
  let component: ETFSymbolsComponent;
  let fixture: ComponentFixture<ETFSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ETFSymbolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ETFSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
