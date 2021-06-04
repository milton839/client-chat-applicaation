import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import CustomListItem from '../components/CustomListItem';
import { auth, db } from '../firebase';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    const signOutUser = () =>{
        auth.signOut().then(() => {
            navigation.replace("Login");
        })
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Sign Out",
            // headerStyle:{backgroundColor:"#fff"},
            // headerTitleStyle:{color:"black"},
            headerTintColor:"black",
            headerLeft: ()=> (
                <View style={{marginLeft:20}}>
                <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                    <Avatar
                        rounded
                        source={{uri: auth?.currentUser?.displayName}}
                    />
                </TouchableOpacity>
            </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    width:88,
                    marginRight:20,
                }}
                >
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>navigation.navigate("AddChat")} activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        })
        
    }, [navigation])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
