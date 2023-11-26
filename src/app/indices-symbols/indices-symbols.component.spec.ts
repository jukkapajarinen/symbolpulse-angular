import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesSymbolsComponent } from './indices-symbols.component';

describe('IndicesSymbolsComponent', () => {
  let component: IndicesSymbolsComponent;
  let fixture: ComponentFixture<IndicesSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicesSymbolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndicesSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
