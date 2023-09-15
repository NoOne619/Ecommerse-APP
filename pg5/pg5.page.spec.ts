import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pg5Page } from './pg5.page';

describe('Pg5Page', () => {
  let component: Pg5Page;
  let fixture: ComponentFixture<Pg5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pg5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
