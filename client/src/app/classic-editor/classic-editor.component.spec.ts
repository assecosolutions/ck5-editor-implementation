import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicEditorComponent } from './classic-editor.component';

describe('ClassicEditorComponent', () => {
  let component: ClassicEditorComponent;
  let fixture: ComponentFixture<ClassicEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicEditorComponent]
    });
    fixture = TestBed.createComponent(ClassicEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
