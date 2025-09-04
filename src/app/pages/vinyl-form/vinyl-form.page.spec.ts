import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VinylFormPage } from './vinyl-form.page';

describe('VinylFormPage', () => {
  let component: VinylFormPage;
  let fixture: ComponentFixture<VinylFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
