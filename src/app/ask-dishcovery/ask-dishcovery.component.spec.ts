import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskDishcoveryComponent } from './ask-dishcovery.component';

describe('AskDishcoveryComponent', () => {
  let component: AskDishcoveryComponent;
  let fixture: ComponentFixture<AskDishcoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskDishcoveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskDishcoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
