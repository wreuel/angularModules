import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppclientComponent } from './appclient.component';

describe('AppclientComponent', () => {
  let component: AppclientComponent;
  let fixture: ComponentFixture<AppclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
