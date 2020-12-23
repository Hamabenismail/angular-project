import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageListesComponent } from './home-page-listes.component';

describe('HomePageListesComponent', () => {
  let component: HomePageListesComponent;
  let fixture: ComponentFixture<HomePageListesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageListesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
