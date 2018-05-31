import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DeckListItem from './DeckListItem';

const data = [
    {   
        id: 1,
        title: 'This is the cards title #1',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
                correctOption: 'true',
            }
        ]
    },
    {
        id: 2,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
                correctOption: 'true',
            }
        ]
    }
    {
        id: 3,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
                correctOption: 'true',
            }
        ]
    }
    {
        id: 4,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
                correctOption: 'true',
            }
        ]
    }
    {
        id: 5,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
                correctOption: 'true',
            }
        ]
    }
    {
        id: 6,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
                correctOption: 'true',
            }
        ]
    }
    {
        id: 7,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
                correctOption: 'true',
            }
        ]
    }
];

const DeckListView = ({ navigation }) => {
    console.log('this is some data', data);
    return (
    <View>
        <View style={{ width: '100%', alignItems: 'center' }}>
            <Text
                style={{
                    fontSize: 25,
                }}
            >
                Amount of decks {data.length}
            </Text>
        </View>

        <FlatList
            keyExtractor={(data) => data.id}
            data={data}
            renderItem={({item}) => <DeckListItem  navigation={navigation} item={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: 'orange', width: '100%'}} />}
        />
    </View>
)};

export default DeckListView;