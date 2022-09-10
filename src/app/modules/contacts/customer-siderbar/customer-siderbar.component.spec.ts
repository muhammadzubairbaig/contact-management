import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSiderbarComponent } from './customer-siderbar.component';

describe('CustomerSiderbarComponent', () => {
  let component: CustomerSiderbarComponent;
  let fixture: ComponentFixture<CustomerSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSiderbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
