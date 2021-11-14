import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Image } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Input } from 'react-native-elements/dist/input/Input'

 const LoginScreen = ({ navigation }) => {
    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");
    const signIn = () => {

    }
    
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
                <Image
                source={{
                    uri:
                    "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
                }}
                style={{ width:150,height:150}}
                />
                <View style={styles.inputContainer}>
                    <Input 
                        placeholder="Email" 
                        autoFocus 
                        type="email" 
                        value={email}
                        onChangeText={(text) => setEmail(text)} 
                    />
                    <Input 
                        placeholder="Password" 
                        secureTextEntry 
                        type="password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        />
                </View>
              <Button 
              containerStyle={styles.button} 
              onPress={signIn} 
              title="Login"
              />
              
              <Button 
              containerStyle={styles.button} 
              onPress={() => navigation.navigate('Register')} 
              title="Register" 
              type="outline"
              />
              
              <View style={{ height:100}} />
        </KeyboardAvoidingView>
    )
};


const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
      padding:10,
      backgroundColor: "white"
    },
    inputContainer:{
        width:300
    },
    button:{
        width: 200,
        margin: 10,
    }
});

export default  LoginScreen;