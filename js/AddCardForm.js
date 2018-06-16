import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { addCard } from './utils/api';
import styles from './styles/formStyles';
import Button from './Button';

class AddCardForm extends Component {
    state = {
        question: '',
        answer: '',
        error: false,
    }

    handleSubmit() {
        const { id } = this.props.navigation.state.params.deck;
        const { updateDecks, updateDeck } = this.props.navigation.state.params;
        let { question, answer } = this.state;
        let error = false;
        question = question.trim();
        answer = answer.trim();
        if (question && answer) {
            const newCard = {
                question,
                answer,
            };
            addCard({ deckId: id, newCard })
                .then((res) => {
                    updateDeck(res);
                    updateDecks();
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
        const { error, question, answer } = this.state;
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled
            >
                {error 
                    ? <Text style={{ color: 'red' }}>Something went wrong</Text>
                    : null
                }
                <Text style={styles.title}>
                    Question for the new card
                </Text>
                <TextInput
                    value={question}
                    style={styles.textInput}
                    onChangeText={text => {
                        this.setState({
                            question: text,
                        })
                    }}
                />
                <Text style={styles.title}>
                    Answer for the new card
                </Text>
                <TextInput
                    value={answer}
                    style={styles.textInput}
                    onChangeText={text => {
                        this.setState({
                            answer: text,
                        })
                    }}
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

export default AddCardForm;
