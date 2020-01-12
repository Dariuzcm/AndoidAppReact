import React from 'react'
import { Text,WebView} from 'react-native'

export default function Article(props) {
    return (
        <View>
            <Text style={{fontSize:25,fontWeight:'bold'}} value={props.data.title.rendered}/>
            <WebView
                source={{html: props.data.content.rendered}}
                style={{marginTop: 20}}
            />
        </View>
    );
}
