import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIneractionComponent } from './component-ineraction.component';

describe('ComponentIneractionComponent', () => {
  let component: ComponentIneractionComponent;
  let fixture: ComponentFixture<ComponentIneractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentIneractionComponent]
    });
    fixture = TestBed.createComponent(ComponentIneractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
