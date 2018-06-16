import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/addDeckButtonStyles';

const AddDeckButton = ({ navigation, updateDecks }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('AddDeck', { updateDecks })}
        style={styles.button}
    >
        <Text
            style={styles.buttonText}
        >
            +
        </Text>
    </TouchableOpacity>
);
    
export default AddDeckButton;
