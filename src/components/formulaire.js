// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Bootstrap components
import { Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon } from 'react-bootstrap';

type Props = {
    enabled: boolean,
    addMessage: ( msg: {
        message: string,
        email: string
    } ) => void,
    email: string,
    length: number
};

type State = {
    length: number,
};

class Formulaire extends React.Component<Props, State> {

    messageForm: ?HTMLFormElement;
    message: ?HTMLTextAreaElement;
    submitButton: ?HTMLButtonElement;

    state = {
      length: this.props.length
    };

    componentDidUpdate(): void {}

    createMessage( event:Event ): void {
        event.preventDefault();

        const message = {
            message: this.message instanceof HTMLTextAreaElement ? this.message.value : '',
            email: this.props.email
        };

        this.props.addMessage( message );

        const form: ( null | Element | Text ) = ReactDOM.findDOMNode( this.messageForm );
        if ( form && form instanceof HTMLFormElement ) form.reset();

        this.setState( { length: this.props.length } );
    }

    updateCounter( event:Event ): void {
        if( this.message instanceof HTMLTextAreaElement ) {
            const length = this.props.length - this.message.value.length;
            this.setState( { length } );
        }
    }

    onKeyDown( event:KeyboardEvent ): void {
        // pressing enter
        if( event.keyCode === 13 ) {
            // with alt key or ctrl key
            if( event.ctrlKey || event.altKey ) {
                // add a line
                if ( this.message instanceof HTMLTextAreaElement ) this.message.value += '\n';
            }
            else {
                // trigger click button to submit form
                event.preventDefault();
                const button: ( null | Element | Text ) = ReactDOM.findDOMNode( this.submitButton );
                if ( button && button instanceof HTMLButtonElement) button.click();
            }
        }
    }

    render(): Form {
        return (
            <Form
                id='writingForm'
                className={ this.props.enabled ? 'form' : 'form disabled' }
                ref={ form => this.messageForm = form }
                onSubmit={ this.createMessage.bind( this ) }
            >

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Your message <span className="info">{ this.state.length }</span></ControlLabel>
                    <FormControl
                        onKeyDown={ this.onKeyDown.bind( this )  }
                        required
                        maxLength={ this.props.length }
                        inputRef={ msg => {
                            if ( msg ) msg.disabled = !this.props.enabled;
                            this.message = msg;
                        }}
                        onChange={ this.updateCounter.bind( this ) }
                        componentClass="textarea"
                        placeholder="Enter a message (ctrl + enter or alt + enter for new line)" />
                </FormGroup>
                <Button
                        disabled={ !this.props.enabled }
                        id="submitButton"
                        ref={ input => this.submitButton = input  }
                        bsStyle="primary"
                        bsSize="large"
                        block
                        type="submit"><Glyphicon glyph="send" /> &nbsp; SEND</Button>

            </Form>
        );
    }

    static propTypes = {
        enabled: PropTypes.bool.isRequired,
        addMessage: PropTypes.func.isRequired,
        email: PropTypes.string.isRequired,
        length: PropTypes.number.isRequired
    };

}
export default Formulaire;