/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Abbreviation from '../plugins/abbreviation/abbreviation';

// Timestamp plugin
class Timestamp extends Plugin {
	public init() {
		const editor = this.editor;
        editor.ui.componentFactory.add( 'timestamp', () => {
            const button = new ButtonView();

            button.set( {
                label: 'Timestamp',
                withText: true
            } );

			// Execute a callback function when the button is clicked.
            button.on( 'execute', () => {
                const now = new Date();

                // Change the model using the model writer.
                editor.model.change( writer => {

                    // Insert the text at the user's current position.
                    editor.model.insertContent( writer.createText( now.toString() ) );
                } );
            } );

            return button;
        } );
	}
}

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Autoformat,
		BlockQuote,
		Bold,
		CloudServices,
		Essentials,
		FontSize,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		Italic,
		Link,
		List,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		SimpleUploadAdapter,
		Table,
		TableToolbar,
		TextTransformation,
		Highlight,
		Underline,
		Alignment,
		Timestamp,
		Abbreviation
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'fontSize',
				'highlight',
				'|',
				'link',
				'imageUpload',
				'blockQuote',
				'insertTable',
				'mediaEmbed',
				'timestamp',
				'abbreviation',
				'|',
				'bulletedList',
				'numberedList',
				'alignment',
				'outdent',
				'indent'
			]
		},
		language: 'en',
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		}
	};
}

export default Editor;
