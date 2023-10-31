import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecipeComponent } from './show-recipe.component';

describe('ShowRecipeComponent', () => {
  let component: ShowRecipeComponent;
  let fixture: ComponentFixture<ShowRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRecipeComponent]
    });
    fixture = TestBed.createComponent(ShowRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
