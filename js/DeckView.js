import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class DeckView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: this.props.navigation.state.params.deck,
        }

        this.updateDeck = this.updateDeck.bind(this);
    }


    updateDeck(updatedDeck) {
        this.setState({
            deck: updatedDeck,
        });
    }

    render() {
        const { deck } = this.state;
        const { updateDecks } = this.props.navigation.state.params;
        return (
            <View
                style={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flex: 1,
                }}
            >   
                <View>
                    <Text>{ deck.title }</Text>
                    <Text>Amount of cards in this deck: { deck.cards.length }</Text>
                </View>
                <TouchableHighlight
                    style={{ borderWidth: 2, height: 50, width: 300, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        deck.cards.length > 0 ? this.props.navigation.navigate('Card', deck) : null;
                    }}
                >
                    <Text>
                        Start Quiz
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigation.navigate('AddCard', { deck, updateDecks, updateDeck: this.updateDeck });
                    }}
                >
                    <Text>
                        Add Card
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default DeckView;