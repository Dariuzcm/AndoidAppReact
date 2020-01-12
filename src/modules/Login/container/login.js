import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ImageBackground,
    CheckBox
} from 'react-native';
import {AsyncStorage} from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: '',
            remember:false
        }
        getData = async () => {
            try {
              const value = await AsyncStorage.getItem('@userdata')
              if(value !== null) {
                console.log(value)
              }
            } catch(e) {
                console.log(e)
              // error reading value
            }
          }
    }
    Validate(usr, pass) {
        if(usr == 'Admin' && pass == 'asdc'){
            if(this.state.remember){
                const userdata ={
                    username: this.state.username,
                    password:this.state.pass
                }
                async () => {
                    try {
                      await AsyncStorage.setItem('@userdata', userdata)
                    } catch (e) {
                     console.log(e)                        
                    }
                  }   
                }
            return true;
        }else return false;
    }

    render() {
        return (
            <ImageBackground style={
                    styles.container
                }
                source={
                    require('./../../../../assets/wallpaper.jpg')
            }>
                <View style={
                    styles.container
                }>
                    <View style={
                        styles.body
                    }>
                        <Text style={
                            styles.headerText
                        }>Main Login</Text>
                        <Text style={
                            styles.headerText
                        }>
                            {
                            this.state.username
                        }
                            {
                            this.state.pass
                        }</Text>
                    </View>
                    <View style={
                        styles.card
                    }>

                        <TextInput style={
                                styles.formItem
                            }
                            placeholder='Nombre de usuario'
                            onChangeText={
                                (usr) => {
                                    this.setState({username: usr});
                                }
                        }></TextInput>
                    <TextInput style={
                            styles.formItem
                        }
                        secureTextEntry={true}
                        placeholder='Contraseña'
                        onChangeText={
                            (pss) => {
                                this.setState({pass: pss})
                            }
                    }></TextInput>
                <Button style={
                        styles.buttonEnter
                    }
                    title='Entrar'
                    onPress={
                        () => {
                            if (this.Validate(this.state.username, this.state.pass)) {
                                this.props.navigation.navigate('Main')
                            } else 
                                alert('Contraseña o Usuario incorrectos!!')
                   }
                    }/>
                <View style={{
                    alignItems:'center',
                    flexDirection:'row'            
                }}>
                <CheckBox value={false} onChange={()=>{
                    this.setState({
                        remember:true
                    })
                }} ></CheckBox><Text>Recuerdame</Text>
                </View>
            </View>
    </View>
</ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    body: {
        flex: 1.6,
        flexDirection: 'column',
        height: '20%'
    },
    background: {},
    formItem: {
        margin: 20,
        height: 20,
        width: 250,
        borderBottomColor: 'black',
        justifyContent: 'center',
        alignItems: "center",
        borderBottomWidth: 1,
        fontSize: 16
    },
    buttonEnter: {
        margin: 20,
        flex: 1,
        backgroundColor: 'blue'
    },
    headerText: {
        marginTop: '20%',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'

    },
    card: {
        flex: 1,
        width: '100%',
        height: '30%',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        marginBottom: '50%',
        borderRadius: 30

    },
    baseText:{
        fontSize:12,
        fontWeight:'bold',
        color: 'black'
    }
});

export default Login;
