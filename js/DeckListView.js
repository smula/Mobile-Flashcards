import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import { fetchDecks, initData } from './utils/api';
// import { connect } from 'react-redux';
import DeckListItem from './DeckListItem';


class DeckListView extends Component {
    state = {
        data: [],
    }

    componentWillMount() {
        initData().then((data) => {
            console.log(data);
            this.setState({ data })
        });
        console.log(this.state.data);;
    }

    render() {
        const { data } = this.state;
        return (
            <View
                style={{ flex: 1, backgroundColor: 'white'}}
            >
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
                    keyExtractor={(data) => data.id.toString()}
                    data={data}
                    renderItem={({ item }) => <DeckListItem navigation={this.props.navigation} item={item} />}
                    ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: 'orange', width: '100%' }} />}
                />
            </View>
        )
    }
};


export default DeckListView;