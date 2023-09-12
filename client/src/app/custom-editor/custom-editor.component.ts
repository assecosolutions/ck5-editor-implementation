import { Component, NgModule } from '@angular/core';

import { CKEditorModule, ChangeEvent } from '@ckeditor/ckeditor5-angular';
import Editor from '../../../ck-custom-build/build/ckeditor';

@Component({
  selector: 'custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent {
  public htmlData = "<p>Hello, world!</p>";
  public Editor = Editor;

  public config = {
		simpleUpload: {
			uploadUrl: 'http://localhost:5278/upload',
      propertyName: 'file',
		}
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.data.get();

    console.log( data.toString() );
  }
}

@NgModule({
  declarations: [ CustomEditorComponent ],
  imports: [CKEditorModule],
  exports: [ CustomEditorComponent ]
})
export class CustomEditorModule {}