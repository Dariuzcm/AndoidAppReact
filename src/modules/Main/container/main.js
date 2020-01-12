import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Article from './Article';

const URL = 'http://notigram.com/wp-json/wp/v2/posts?per_page=30&page=1&_embed';

class MainView extends Component {
    constructor(props) {
        super(props);
    }
    getData = () => {
        fetch(URL).then((response) => {
            return response.json();
        })
        console.log(response)
        return response
    }

    emptyList = () => {
        return (
            <View>
                <Text>
                    La lista esta vacia
                </Text>
            </View>
        );
    }

    render() {
        const data = this.getData
        return (
            <View style={
                styles.container
            }>
                <Text style={
                    {
                        fontStyle: 'italic',
                        fontSize: 10
                    }
                }>
                    {data}</Text>
                <FlatList data={data}
                    renderItem={
                        ({item}) => <Article data={item}></Article> }
                    ListEmptyComponent={
                        this.emptyList
                }></FlatList>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    }
})

export default MainView;
