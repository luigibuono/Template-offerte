import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieSettingComponent } from './cookie-setting.component';

describe('CookieSettingComponent', () => {
  let component: CookieSettingComponent;
  let fixture: ComponentFixture<CookieSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieSettingComponent]
    });
    fixture = TestBed.createComponent(CookieSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
