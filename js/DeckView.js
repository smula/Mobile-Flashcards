import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles/deckViewStyles';
import Button from './Button';

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

    handleGoToQuiz() {
        const { deck } = this.state;
        deck.cards.length > 0 ? this.props.navigation.navigate('Card', deck) : null;
    }

    handleGoToAddCard() {
        const { deck } = this.state;
        const { updateDecks } = this.props.navigation.state.params;
        this.props.navigation.navigate('AddCard', { deck, updateDecks, updateDeck: this.updateDeck });
    }

    render() {
        const { deck } = this.state;
        return (
            <View
                style={styles.container}
            >   
                <View style={styles.titleHolder}>
                    <Text style={styles.deckTitle}>{ deck.title }</Text>
                    <Text style={styles.deckAmount}>Amount of cards in this deck: { deck.cards.length }</Text>
                </View>
                <Button
                    buttonText="Start Quiz"
                    onPress={() => this.handleGoToQuiz()}
                />
                <Button
                    buttonText="Add Card"
                    onPress={() => this.handleGoToAddCard()}
                />
            </View>
        );
    }
}

export default DeckView;