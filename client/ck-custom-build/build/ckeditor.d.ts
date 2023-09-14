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
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
declare class Timestamp extends Plugin {
    init(): void;
}
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Timestamp | typeof Autoformat | typeof BlockQuote | typeof Bold | typeof CloudServices | typeof Essentials | typeof FontSize | typeof Heading | typeof Image | typeof ImageCaption | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof Italic | typeof Link | typeof List | typeof MediaEmbed | typeof Table | typeof TableToolbar | typeof Highlight | typeof Underline | typeof Alignment)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        contentsLangDirection: string;
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
    };
}
export default Editor;
