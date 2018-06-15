import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

const DeckListItem = ({ item, navigation }) => {
    console.log(item);
    return (
    <TouchableHighlight
        style={{
            minHeight: 100,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        }}
        onPress={() => navigation.push('Deck', { deck: item })}
    >
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>
                { item.title }
            </Text>
            <Text>
                Cards: { item.cards.length }
            </Text>
        </View>
    </TouchableHighlight>
)};

export default DeckListItem;
