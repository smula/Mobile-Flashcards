import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    cardProgress: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    questionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 70,
    },
    showAnswerButton: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    showAnswerButtonText: {
        textAlign: 'center',
    },
    quizButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
});