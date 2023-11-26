import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexSymbolsComponent } from './forex-symbols.component';

describe('ForexSymbolsComponent', () => {
  let component: ForexSymbolsComponent;
  let fixture: ComponentFixture<ForexSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexSymbolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForexSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
