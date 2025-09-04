import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VinylDetailPage } from './vinyl-detail.page';

describe('VinylDetailPage', () => {
  let component: VinylDetailPage;
  let fixture: ComponentFixture<VinylDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
