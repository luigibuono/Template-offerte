import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezionisecondarieComponent } from './sezionisecondarie.component';

describe('SezionisecondarieComponent', () => {
  let component: SezionisecondarieComponent;
  let fixture: ComponentFixture<SezionisecondarieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SezionisecondarieComponent]
    });
    fixture = TestBed.createComponent(SezionisecondarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
