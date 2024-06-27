/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentDetailsComponent } from './student-details.component';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [StudentDetailsComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
