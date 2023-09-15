import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg4Page } from './pg4.page';

describe('Pg4Page', () => {
  let component: Pg4Page;
  let fixture: ComponentFixture<Pg4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pg4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
