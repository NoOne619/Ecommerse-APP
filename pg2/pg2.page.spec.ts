import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg2Page } from './pg2.page';

describe('Pg2Page', () => {
  let component: Pg2Page;
  let fixture: ComponentFixture<Pg2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pg2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
