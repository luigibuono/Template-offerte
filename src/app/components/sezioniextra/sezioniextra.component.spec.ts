import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioniextraComponent } from './sezioniextra.component';

describe('SezioniextraComponent', () => {
  let component: SezioniextraComponent;
  let fixture: ComponentFixture<SezioniextraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SezioniextraComponent]
    });
    fixture = TestBed.createComponent(SezioniextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
