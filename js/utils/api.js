import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import uuidv1 from 'uuid/v1';

const NOTIFICATION_KEY = 'flashcards:notifications'
const INIT_KEY = "flashcards:init";
const DECKS_STORAGE_KEY = "flashcards:decks";

const dummyData = [
    {
        id: 1,
        title: 'React',
        cards: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            },
        ],
    },
    {
        id: 2,
        title: 'JavaScript',
        cards: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            },
        ],
    },
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
            if (result && result.initSet !== true) {
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
            return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(returnData))
                .then(() => deck);
        });
}

export const addDeck = ({ title }) => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((res) => {
            const result = JSON.parse(res) ? JSON.parse(res) : [];
            result.push({
                id: uuidv1(),
                title,
                cards: [],
            });
            return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(result))
                .then(() => ({
                        id: uuidv1(),
                        title,
                        cards: [],
                    }));
        });
}

const createNotification = () => ({
    title: 'Forgotten anything?',
    body: `Dont't forget to quiz today!`,
    ios: {
        sound: true,
    },
    android: {
        priority: 'high',
        sound: true,
        vibrate: true,
        sticky: false,
    },
});

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate());
                            tomorrow.setHours(15);
                            tomorrow.setMinutes(0);
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    });
            }
        });
}

export const clearLocalNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}
