import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePizzaComponent } from './commande-pizza.component';

describe('CommandePizzaComponent', () => {
  let component: CommandePizzaComponent;
  let fixture: ComponentFixture<CommandePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandePizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
