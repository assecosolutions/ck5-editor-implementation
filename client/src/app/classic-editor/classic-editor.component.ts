import { Component, NgModule } from '@angular/core';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'classic-editor',
  templateUrl: './classic-editor.component.html',
  styleUrls: ['./classic-editor.component.scss']
})
export class ClassicEditorComponent {
  public Editor = ClassicEditor;
  data = "<p>Hello, world!</p>";
}

@NgModule({
  declarations: [ ClassicEditorComponent ],
  imports: [ CKEditorModule ],
  exports: [ ClassicEditorComponent ]
})
export class ClassicEditorModule {}
