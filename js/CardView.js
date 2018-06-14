import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

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
        console.log(this.props.navigation.state.params.cards.length);
        this.setState({
            cards: this.props.navigation.state.params.cards,
            amount: this.props.navigation.state.params.cards.length,
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
            })
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
        return <Text>Your score is: { score }%</Text>;
    }

    render() {
        console.log(this.state);
        return (
            <View style={{ flex: 1, justifyContent: 'space-between'}}>
                <View style={{ borderWidth: 1, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {!this.state.showPercentage
                    ? (
                        <View>
                            <Text>
                                {
                                    this.state.cards[this.state.currentCard].question
                                }
                            </Text>
                            {this.state.flipped
                                && <Text>
                                {
                                    this.state.cards[this.state.currentCard].answer
                                }
                                </Text>
                            }
                        </View>
                    )
                    : this.renderPercentage()
                    }
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableHighlight
                        style={{ padding: 30, borderWidth: 2 }}
                        onPress={() => this.nextQuestion('inCorrect')}
                    >
                        <Text>
                            Wrong
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ padding: 30, borderWidth: 2 }}
                        onPress={() => this.showAnswer()}
                    >
                        <Text>
                            {
                                !this.state.flipped ? 'Show Answer' : 'Hide Answer'
                            }
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ padding: 30, borderWidth: 2 }}
                        onPress={() => this.nextQuestion('correct')}
                    >
                        <Text>
                            {
                                !this.state.showReplay ? 'Correct' : 'Replay'
                            }
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default CardView;
