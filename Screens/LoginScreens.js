import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreens = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if(authUser){
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    },[]);

    const signIn = ()=>{
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error)=>alert(error))
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Image
                source={{
                    uri:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
                }}
            />
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Email" 
                autoFocus 
                type="email"
                value={email}
                onChangeText = {(text) => setEmail(text)} 
                />
                <Input 
                placeholder="Password" 
                secureTextEntry 
                type="password" 
                value={password}
                onChangeText = {(text) => setPassword(text)} 
                onSubmitEditing={signIn}
                />
                <Button containerStyle={styles.button} onPress={signIn} title="Login" />
                <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreens
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:300,
        marginTop:20,
    },
});