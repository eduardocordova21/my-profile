import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageAndDescriptionComponent } from './profile-image-and-description.component';

describe('ProfileImageAndDescriptionComponent', () => {
  let component: ProfileImageAndDescriptionComponent;
  let fixture: ComponentFixture<ProfileImageAndDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileImageAndDescriptionComponent]
    });
    fixture = TestBed.createComponent(ProfileImageAndDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
