import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import './abbr-styles.css';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import FormView from './abbreviationview';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';

export default class AbbreviationUI extends Plugin {
    static get requires() {
        return [ ContextualBalloon ];
    }

    init() {
        const editor = this.editor;

        // Create the balloon and the form view.
        this._balloon = this.editor.plugins.get( ContextualBalloon );
        this.formView = this._createFormView();

        editor.ui.componentFactory.add( 'abbreviation', () => {
            const button = new ButtonView();

            button.label = 'Abbreviation';
            button.tooltip = true;
            button.withText = true;

            this.listenTo(button, 'execute', () => {
                this._showUI();
            } );

            return button;
        } );
    }

    _createFormView() {
        const editor = this.editor;
        const formView = new FormView( editor.locale );

        this.listenTo( formView, 'submit', () => {
            const title = formView.titleInputView.fieldView.element.value;
            const abbr = formView.abbrInputView.fieldView.element.value;

            editor.model.change( writer => {
                editor.model.insertContent(
                    writer.createText( abbr, { abbreviation: title } )
                );
            } );

            this._hideUI();
        } );

        // Hide the form view after clicking the "Cancel" button.
        this.listenTo( formView, 'cancel', () => {
            this._hideUI();
        } );

        // Hide the form view when clicking outside the balloon.
        clickOutsideHandler( {
            emitter: formView,
            activator: () => this._balloon.visibleView === formView,
            contextElements: [ this._balloon.view.element ],
            callback: () => this._hideUI()
        } );

        return formView;
    }

    _showUI() {
        this._balloon.add( {
            view: this.formView,
            position: this._getBalloonPositionData()
        } );

        this.formView.focus();
    }

    _hideUI() {
        this.formView.abbrInputView.fieldView.value = '';
        this.formView.titleInputView.fieldView.value = '';
        this.formView.element.reset();

        this._balloon.remove( this.formView );

        // Focus the editing view after closing the form view.
        this.editor.editing.view.focus();
    }

    _getBalloonPositionData() {
        const view = this.editor.editing.view;
        const viewDocument = view.document;
        let target = null;

        // Set a target position by converting view selection range to DOM.
        target = () => view.domConverter.viewRangeToDom(
            viewDocument.selection.getFirstRange()
        );

        return {
            target
        };
    }
}