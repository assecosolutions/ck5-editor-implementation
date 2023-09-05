import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class AbbreviationUI extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'abbreviation', () => {
            const button = new ButtonView();

            button.label = 'Abbreviation';
            button.tooltip = true;
            button.withText = true;

            this.listenTo(button, 'execute', () => {
                const title = 'By the Way';
                const abbr =  'BTW';
                
                // Change the model to insert the abbreviation
                editor.model.change( writer => {
                    editor.model.insertContent(
                        // Create a text node with the abbreviation attribute
                        writer.createText(abbr, {abbreviation: title })
                    )
                });
            } );

            return button;
        } );
    }
}