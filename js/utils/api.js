import { AsyncStorage } from 'react-native';

const INIT_KEY = "flashcards:init";
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
export const clearAllData = () => {
    AsyncStorage.clear();
}

export const setDummyDecks = () => {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
    AsyncStorage.setItem(INIT_KEY, JSON.stringify({ initSet: true }));
}


export const fetchDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((res) => JSON.parse(res));
}

export const initData = () => {
    AsyncStorage.getItem(INIT_KEY)
        .then((res) => {
            const result = JSON.parse(res);
            if (result.initSet !== true) {
                setDummyDecks();
            }
        })
    return fetchDecks();
}

export const addCard = ({ deckId, newCard }) => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((res) => {
            const result = JSON.parse(res);
            const deck = result.find((item) => {
                return item.id === deckId;
            });
            deck.cards.push(newCard);
            const removedData = result.filter((item) => item.id !== deckId);

            const returnData = [
                {...deck},
                ...removedData
            ];
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(returnData))
                .then(() => 'done');
        });
}
