import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrantListComponent } from './grant-list.component';

describe('GrantListComponent', () => {
  let component: GrantListComponent;
  let fixture: ComponentFixture<GrantListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
