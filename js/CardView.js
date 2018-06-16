import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { clearLocalNotification, setLocalNotification } from './utils/api';
import styles from './styles/cardViewStyles';
import QuizButton from './QuizButton';

const defaultState = {
    showPercentage: false,
    flipped: false,
    currentCard: 0,
    correct: 0,
    amount: 0,
    cards: [],
    showReplay: false,
}

class CardView extends Component {
    state = {
        showPercentage: false,
        flipped: false,
        currentCard: 0,
        correct: 0,
        amount: 0,
        cards: [],
        showReplay: false,
    }

    componentWillMount() {
        const { cards } = this.props.navigation.state.params;

        this.setState({
            cards: cards,
            amount: cards.length,
        })
    }

    nextQuestion(answer) {
        let correct = this.state.correct;
        if (answer === 'correct') {
            correct = this.state.correct + 1;
        }
        if (this.state.currentCard === this.state.amount - 1 && !this.state.showReplay) {
            this.setState({
                showPercentage: true,
                flipped: false,
                correct,
                showReplay: true,
            });

            clearLocalNotification()
                .then(setLocalNotification);
        } else if (this.state.showReplay) {
            this.setState({
                ...defaultState,
                cards: this.props.navigation.state.params.cards,
                amount: this.props.navigation.state.params.cards.length,
            });
        } else {
            this.setState({
                currentCard: (this.state.currentCard + 1),
                flipped: false,
                correct,
            });
        }
    }
    
    showAnswer() {
        this.setState({
            flipped: !this.state.flipped,
        });
    }

    renderPercentage() {
        const score = Math.round((this.state.correct / this.state.amount) * 100);
        return <Text style={styles.contentText}>Your score is: { score }%</Text>;
    }

    render() {
        const {
            currentCard,
            amount,
            showPercentage,
            cards,
            flipped,
            showReplay,
        } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.cardProgress}>
                    <Text>
                        Card: { currentCard + 1 } / { amount }
                    </Text>
                </View>
                <View style={styles.questionsContainer}>
                    {!showPercentage
                    ? (
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentText}>
                                {cards[currentCard].question}
                            </Text>
                            {flipped
                                && <Text style={styles.contentText}>
                                answer: {cards[currentCard].answer}
                                </Text>
                            }
                        </View>
                    )
                    : this.renderPercentage()
                    }
                </View>
                <View style={styles.buttonContainer}>
                    <QuizButton
                        onPress={() => this.nextQuestion('inCorrect')}
                        type="wrong"
                    />
                    {
                        showReplay
                            ? <TouchableOpacity
                                style={styles.showAnswerButton}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Text style={styles.showAnswerButtonText}>
                                    Go back to the deck view
                                </Text>
                            </TouchableOpacity>
                            : <TouchableOpacity
                                style={styles.showAnswerButton}
                                onPress={() => this.showAnswer()}
                            >
                                <Text style={styles.showAnswerButtonText}>
                                    {
                                        !flipped ? 'Show Answer' : 'Hide Answer'
                                    }
                                </Text>
                            </TouchableOpacity>
                    }

                    <QuizButton
                        onPress={() => this.nextQuestion('correct')}
                        type={!showReplay ? 'correct' : 'replay'}
                    />
                </View>
            </View>
        );
    }
}

export default CardView;
