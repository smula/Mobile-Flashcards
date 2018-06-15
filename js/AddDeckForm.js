import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

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
            // this should hadnle the submit of crating a deck 
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
                    Choose a title for the new deck
                </Text>
                <TextInput
                    value={this.state.title}
                    style={{ width: '100%' }}
                    onChangeText={text => {
                        this.setState
                        ({
                            title: text,
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

export default AddDeckForm;
