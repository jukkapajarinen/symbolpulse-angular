import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSymbolsComponent } from './crypto-symbols.component';

describe('CryptoSymbolsComponent', () => {
  let component: CryptoSymbolsComponent;
  let fixture: ComponentFixture<CryptoSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoSymbolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
