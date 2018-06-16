import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { addDeck } from './utils/api';
import styles from './styles/formStyles';
import Button from './Button';

class AddDeckForm extends Component {
    state = {
        title: '',
        error: false,
    }

    handleSubmit() {
        let { title } = this.state;
        let error = false;
        title = title.trim();
        if (title) {
            addDeck({ title })
                .then(() => {
                    this.props.navigation.state.params.updateDecks();
                    this.props.navigation.goBack();
                });
        } else {
            error = true;
        }
        this.setState({
            error,
        });
    }

    render() {
        const { error, title } = this.state;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                {error 
                    ? <Text style={{ color: 'red' }}>Something went wrong</Text>
                    : null
                }
                <Text style={styles.title}>
                    Choose a title for the new deck
                </Text>
                <TextInput
                    value={title}
                    style={styles.textInput}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    onChangeText={text => this.setState({ title: text })}
                    placeholder="Enter title here"
                />
                <Button
                    onPress={() => {
                        this.handleSubmit();
                    }}
                    buttonText="Submit"
                />

            </KeyboardAvoidingView>
        );
    }
}

export default AddDeckForm;
