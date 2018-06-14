import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const DeckListItem = ({ item, navigation }) => (
    <TouchableHighlight
        style={{
            minHeight: 100,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={() => navigation.push('Deck', { deck: item })}
    >
        <Text>
            { item.title }
        </Text>
    </TouchableHighlight>
);

export default DeckListItem;
