import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioniprincipaliComponent } from './sezioniprincipali.component';

describe('SezioniprincipaliComponent', () => {
  let component: SezioniprincipaliComponent;
  let fixture: ComponentFixture<SezioniprincipaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SezioniprincipaliComponent]
    });
    fixture = TestBed.createComponent(SezioniprincipaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
