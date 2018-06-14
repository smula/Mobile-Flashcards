import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DeckListView from './DeckListView';
import DeckView from './DeckView';
import CardView from './CardView';

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
});

export default Stack;