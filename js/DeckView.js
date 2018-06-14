import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class DeckView extends Component {
    render() {
        const { deck } = this.props.navigation.state.params;
        return (
            <View
                style={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flex: 1,
                }}
            >
                <Text>{ deck.title }</Text>
                <TouchableHighlight
                    style={{ borderWidth: 2, height: 50, width: 300, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => this.props.navigation.navigate('Card', deck)}
                >
                    <Text>
                        Start Quiz
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>
                        Add Card
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default DeckView;