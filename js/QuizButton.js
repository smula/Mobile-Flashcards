import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles/cardViewStyles';

const renderType = (type) => {
    switch(type) {
        case 'wrong':
            return 'times';
        case 'correct':
            return 'check';
        case 'replay':
            return 'repeat';
    }
}

const renderColor = (type) => {
    switch(type) {
        case 'wrong':
            return 'red';
        case 'correct':
            return 'green';
        case 'repaly':
            return 'black';
    }
}

const QuizButton = ({ onPress = () => {}, type = 'wrong' }) => (
    <TouchableOpacity
        style={styles.quizButton}
        onPress={() => onPress()}
    >
        <FontAwesome
            name={renderType(type)}
            size={30}
            color={renderColor(type)}
        />
    </TouchableOpacity>
)

export default QuizButton;
