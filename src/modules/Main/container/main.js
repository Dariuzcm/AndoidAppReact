import React, {Component} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator, Text} from 'react-native';
import Article from './Article';
const URL = 'http://notigram.com/wp-json/wp/v2/posts?per_page=30&page=1&_embed';

class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }
    bodySeparator = () => {
        return (
            <View style={
                {
                    height: 2,
                    whidt: "100%",
                    backgroundColor: 'gray',
                    marginVertical: 5
                }
            }/>
        )
    }
    componentDidMount() {
        return fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((json) => {
            let article=[]
            try {
                json.forEach(fragj => {
                    let id = fragj.id
                    let title = fragj.title.rendered
                    let content = fragj.content.rendered
                    let faturedMedia=fragj._embedded['wp:featuredmedia']
        
                    let row={
                        id:id,
                        title:title,
                        content:content,
                        image:faturedMedia[0]['source_url']
                    }
                    article.push(row)
                });
                
            } catch (err) {
                console.log('Error : en conversion a json'+err)
            }
            this.setState({
                data: article,
                isLoading: false})
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={
                    styles.container
                }>
                    <Text>Cargando</Text>
                    <ActivityIndicator/>
                </View>
            );
        } else {
            var DATA = this.state.data
            return (
                <View style={
                    styles.container
                }>
                    <FlatList data={DATA}
                        renderItem={
                            ({item}) => <Article data={item}></Article> }
                        ItemSeparatorComponent={
                            this.bodySeparator
                        }
                        ListEmptyComponent={
                            this.ListaVacia
                    }></FlatList>

            </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    mainText: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default MainView;
