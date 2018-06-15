import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { addCard } from './utils/api';

class AddCardForm extends Component {
    state = {
        question: '',
        answer: '',
        error: false,
    }

    handleSubmit() {
        const { id } = this.props.navigation.state.params;
        let { question, answer } = this.state;
        let error = false;
        question = question.trim();
        answer = answer.trim();
        if (question && answer) {
            const newCard = {
                question,
                answer,
            };
            addCard({ deckId: id, newCard });
        } else {
            error = true;
        }
        this.setState({
            error,
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', padding: 20 }}>
                <Text>
                    Question for the new card
                </Text>
                <TextInput
                    value={this.state.question}
                    style={{ width: '100%' }}
                    onChangeText={text => {
                        this.setState({
                            question: text,
                        })
                    }}
                />
                <Text>
                    Answer for the new card
                </Text>
                <TextInput
                    value={this.state.answer}
                    style={{ width: '100%' }}
                    onChangeText={text => {
                        this.setState({
                            answer: text,
                        })
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.handleSubmit();
                    }}
                    style={{
                        width: '100%',
                        height: 40,
                        borderWidth: 1,
                    }}
                >
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default AddCardForm;
