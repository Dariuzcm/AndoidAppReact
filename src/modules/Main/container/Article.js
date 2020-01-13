import React from 'react'
import { View, Text, Image } from 'react-native';
import WebView from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';

export default function Article(props) {
    const htmlContent = "<div class='content'>"+props.data.content+"</div><style> .content{ width: 90%; text-align:'justify;'}p {font-family: verdana; font-size: 30px; width:'80%'}</style>"
    return (
        <View style={{width:"100%",flexDirection:'column'}}>   
        
        <Text style={{
            flex:1,
            fontWeight:'bold',
            fontSize:25,
            flexDirection:'column'
        }}>
            {props.data.title}
        </Text>
        <ScrollView>
        <View style={{alignItems:'center'}}>
        <Image style={{alignItems: 'center',flex:1,width:400,height:500}}source={{uri : props.data.image}}/>
        </View>
        <WebView
            javaScriptEnabled={true}
            domStorageEnabled={false}
            style={{width:"100%",height:500 ,marginTop:20}}
            source={{html: htmlContent}}
        />
        </ScrollView>
        </View>
        
    );
}
()=>{
    
}