import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFileComponent } from './practice-file.component';

describe('PracticeFileComponent', () => {
  let component: PracticeFileComponent;
  let fixture: ComponentFixture<PracticeFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
