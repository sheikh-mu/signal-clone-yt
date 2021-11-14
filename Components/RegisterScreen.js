import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';
import { TextElement } from 'react-native-elements/dist/text/Text';

const RegisterScreen = ({ navigation }) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [imageUrl, setImageUrl] = useState("");

   const register = () => {
       
   }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>

                <TextElement h3 style={{ marginBottom: 50}}>
                    Create a Signal Account
                </TextElement>
              
            <View style={styles.inutContainer}>
                <Input 
                placeholder="FullName" 
                autoFocus 
                type="text" 
                value={name}
                onChangeText={(text) => setName(text)}
                />

                 <Input 
                placeholder="Email" 
                type="email" 
                value={email}
                onChangeText={(text) => setEmail(text)}
                /> 
                
                <Input 
                placeholder="Password" 
                type="password"
                secureTextEntry 
                value={password}
                onChangeText={(text) => setPassword(text)}
                /> 
                
                <Input 
                placeholder="Profile Picture URL (optional)"  
                type="text" 
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}
                />
                
                <Button 
                title="Submit"
                raised
                onPress={register}
                style={{ backgroundColor:"black"}}
                />
                <View style={{ height:100}} />
            
            </View>
        </KeyboardAvoidingView>
    );
};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        
    },
    inutContainer:{}
});


export default RegisterScreen;
