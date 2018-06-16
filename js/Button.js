import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles/buttonStyles';

const Button = ({ onPress = () => {}, buttonText = '' }) => (
    <TouchableOpacity
        onPress={() => onPress()}
        style={styles.button}
    >
        <Text style={styles.buttonText}>
            {buttonText}
        </Text>
    </TouchableOpacity>
);

export default Button;
