import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DeckListView from './DeckListView';
import DeckView from './DeckView';
import CardView from './CardView';
import AddCardForm from './AddCardForm';
import AddDeckForm from './AddDeckForm';

const Stack = createStackNavigator({
    DeckList: {
        screen: DeckListView,
        navigationOptions: {
            title: 'Deck List'
        }
    },
    Deck: {
        screen: DeckView,
        navigationOptions: {
            title: 'Deck View'
        }
    },
    Card: {
        screen: CardView,
        navigationOptions: {
            title: 'Card View'
        }
    },
    AddCard: {
        screen: AddCardForm,
        navigationOptions: {
            title: 'Add Card'
        }
    },
    AddDeck: {
        screen: AddDeckForm,
        navigationOptions: {
            title: 'Add Deck'
        }
    },

});

export default Stack;