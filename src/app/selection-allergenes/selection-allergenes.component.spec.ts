import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionAllergenesComponent } from './selection-allergenes.component';

describe('SelectionAllergenesComponent', () => {
  let component: SelectionAllergenesComponent;
  let fixture: ComponentFixture<SelectionAllergenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionAllergenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionAllergenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
