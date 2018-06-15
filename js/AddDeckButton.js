import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AddDeckButton = ({ navigation, updateDecks }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('AddDeck', { updateDecks })}
        style={{
            height: '100%',
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text
            style={{
                fontSize: 30,
            }}
        >
            +
        </Text>
    </TouchableOpacity>
);
    
export default AddDeckButton;
