import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back"
        })
    },[navigation])

    const register = ()=>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoUrl: imageUrl || "https://i.ibb.co/wRcDwKW/team-01.jpg",
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{marginBottom:50}}>
                Create a new account
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autofocus
                    type='text'
                    value={name}
                    onChangeText = {(text) =>setName(text)}
                />
                <Input
                    placeholder="Email"
                    type='email'
                    value={email}
                    onChangeText = {(text) =>setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    type='password'
                    secureTextEntry
                    value={password}
                    onChangeText = {(text) =>setPassword(text)}
                />
                <Input
                    placeholder="Profile picture URL(optional)"
                    type='text'
                    value={imageUrl}
                    onChangeText = {(text) =>setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button
                containerStyle={styles.button}
                onPress={register}
                title="Register"
                raised
            />
            <View style={{height:100}} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        backgroundColor:"white"
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:300,
        marginTop:20,
    },
})