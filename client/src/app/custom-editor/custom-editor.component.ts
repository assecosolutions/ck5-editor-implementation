import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';

import { CKEditorModule, ChangeEvent } from '@ckeditor/ckeditor5-angular';
import Editor from '../../../ck-custom-build/build/ckeditor';
import { EditorService } from '../services/editor.service';

@Component({
  selector: 'custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent {
  public Editor = Editor;
  // Sets data to the editor at the beginning
  public editor_data = '<h2><strong>Hello,</strong></h2><p><u>I hope you are doing well.</u></p><p><strong>Kind regards,</strong></p><p><mark class="marker-pink">K.</mark></p>';
  public editor_output = this.editor_data;
  public editor_output_result = "";

  constructor(
    private editorService: EditorService
  ) {}

  public config = {
		simpleUpload: {
			uploadUrl: 'http://localhost:5278/upload',
      propertyName: 'file',
		}
  }

  public onChange( { editor }: ChangeEvent ) {
    if (editor && editor.data) {
      this.editor_output = editor.data.get();
    } else {
      this.editor_output = 'Undefined';
    }
  }

  public onSend() {
    // Using the editor service
    this.editorService.sendEditorConent(this.editor_output).subscribe( { 
      next: (data) => {
        this.setEditorOutput(data);
      },
      error: (error) => {
        this.setEditorOutput(error);
      },
    } );
  }

  public setEditorOutput( value: any ): void {
    if (typeof value === 'object' && value !== null && 'content' in value) {
      this.editor_output_result = value.content;
    } else {
      this.editor_output_result = value;
    }
  }
}

@NgModule({
  declarations: [ CustomEditorComponent ],
  imports: [CKEditorModule],
  exports: [ CustomEditorComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomEditorModule {}