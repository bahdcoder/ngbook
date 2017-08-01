import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJokeComponent } from './create-joke.component';

describe('CreateJokeComponent', () => {
  let component: CreateJokeComponent;
  let fixture: ComponentFixture<CreateJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
