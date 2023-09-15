import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg3Page } from './pg3.page';

describe('Pg3Page', () => {
  let component: Pg3Page;
  let fixture: ComponentFixture<Pg3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pg3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
