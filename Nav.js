import React from 'react';
import { View, Text } from 'react-native'

//2 types of components - 1. functional 2. class components

function NavBar (props) {
    console.log('props',props.bac)
    return (
        <View style={{ flex: 1,  flexDirection: 'row',  maxHeight: 100 }}>
            <View style={{ flex: 1, backgroundColor: props.bac, justifyContent: 'center', alignItem: 'center' }}>
            <Text style={{ fontSize: 20 }}>Home {props.counter}</Text>
            </View>
            <View style={{ flex: 1 , backgroundColor: 'red', justifyContent: 'center', alignItem: 'center' }}>
            <Text style={{ fontSize: 20 }}>AboutUs</Text>
            </View>
            <View style={{ flex: 1 , backgroundColor: 'green', justifyContent: 'center', alignItem: 'center'}}>
            <Text style={{ fontSize: 20 }}>Contact</Text>
            </View>
        </View>
    )
}

export default NavBar;
