import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcriteriaComponent } from './bookcriteria.component';

describe('BookcriteriaComponent', () => {
  let component: BookcriteriaComponent;
  let fixture: ComponentFixture<BookcriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
