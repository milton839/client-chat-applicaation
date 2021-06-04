import React from 'react'
import { View, Text } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri:"https://i.ibb.co/wRcDwKW/team-01.jpg",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:"800"}}>
                    Client Chat
                </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                        Hello! How are you?
                    </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem
