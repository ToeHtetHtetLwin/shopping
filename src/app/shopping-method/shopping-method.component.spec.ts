import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingMethodComponent } from './shopping-method.component';

describe('ShoppingMethodComponent', () => {
  let component: ShoppingMethodComponent;
  let fixture: ComponentFixture<ShoppingMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
