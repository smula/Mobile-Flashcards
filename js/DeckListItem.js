import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import styles from './styles/deckListItemStyles';

const DeckListItem = ({ item, navigation, updateDecks }) => {
    return (
    <TouchableHighlight
        style={styles.container}
        onPress={() => navigation.push('Deck', {
            deck: item,
            updateDecks, 
        })}
    >
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                { item.title }
            </Text>
            <Text style={styles.text}>
                Cards: { item.cards.length }
            </Text>
        </View>
    </TouchableHighlight>
)};

export default DeckListItem;
