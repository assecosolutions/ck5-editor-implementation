import { Component, NgModule } from '@angular/core';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent {

}

@NgModule({
  declarations: [ CustomEditorComponent ],
  imports: [CKEditorModule],
  exports: [ CustomEditorComponent ]
})
export class CustomEditorModule {}