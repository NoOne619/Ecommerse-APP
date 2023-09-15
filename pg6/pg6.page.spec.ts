import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg6Page } from './pg6.page';

describe('Pg6Page', () => {
  let component: Pg6Page;
  let fixture: ComponentFixture<Pg6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pg6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
