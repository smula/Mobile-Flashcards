import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { fetchDecks, initData, clearAllData } from './utils/api';
import DeckListItem from './DeckListItem';
import AddDeckButton from './AddDeckButton';

class DeckListView extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <AddDeckButton
                navigation={navigation}
                updateDecks={navigation.getParam('updateDecks')}
            />
        ),
    });
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

        this.updateDecks = this.updateDecks.bind(this);
    }

    componentWillMount() {
        initData().then((data) => {
            this.setState({ data })
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({ updateDecks: this.updateDecks });
    }

    updateDecks() {
        fetchDecks()
            .then((data) => {
                this.setState({ data });
            });
    }

    render() {
        const { data } = this.state;
        return (
            <View
                style={{ flex: 1, backgroundColor: 'white'}}
            >

                <FlatList
                    keyExtractor={(data) => data.id.toString()}
                    data={data}
                    renderItem={({ item }) => <DeckListItem navigation={this.props.navigation} updateDecks={this.updateDecks} item={item} />}
                    ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: 'orange', width: '100%' }} />}
                />
            </View>
        )
    }
};


export default DeckListView;