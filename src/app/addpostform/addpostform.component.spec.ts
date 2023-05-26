import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostformComponent } from './addpostform.component';

describe('AddpostformComponent', () => {
  let component: AddpostformComponent;
  let fixture: ComponentFixture<AddpostformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpostformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpostformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
