import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcommentsformComponent } from './postcommentsform.component';

describe('PostcommentsformComponent', () => {
  let component: PostcommentsformComponent;
  let fixture: ComponentFixture<PostcommentsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcommentsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcommentsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
