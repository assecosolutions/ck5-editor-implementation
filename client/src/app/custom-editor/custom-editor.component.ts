import { Component, NgModule } from '@angular/core';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import * as customBuild from '../../ck-custom-build/build/ckeditor';

@Component({
  selector: 'custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent {
  public htmlData:string = "<p>Hello, world!</p>";
  public Editor = customBuild as any;
}

@NgModule({
  declarations: [ CustomEditorComponent ],
  imports: [CKEditorModule],
  exports: [ CustomEditorComponent ]
})
export class CustomEditorModule {}