import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = "flashcards:decks";

const dummyData = [
    {
        id: 1,
        title: 'This is the cards title #1',
        cards: [
            {
                question: 'this is the question #1',
                answer: 'this is the answer',
            },
            {
                question: 'this is the question #2',
                answer: 'this is the answer',
            },
            {
                question: 'this is the question #3',
                answer: 'this is the answer',
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
            }
        ]
    },
    {
        id: 3,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
            }
        ]
    },
    {
        id: 4,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
            }
        ]
    },
    {
        id: 5,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
            }
        ]
    },
    {
        id: 6,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
            }
        ]
    },
    {
        id: 7,
        title: 'This is the cards title #2',
        cards: [
            {
                question: 'this is the question',
                answer: 'this is the answer',
            }
        ]
    }
];

export const setDummyDecks = () => {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
}


export const fetchDecks = () => {
    console.log('fetching')
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((res) => JSON.parse(res));
}

export const initData = () => {
    console.log('init');
    setDummyDecks();
    return fetchDecks();
            //.then(() => fetchDecks())
}