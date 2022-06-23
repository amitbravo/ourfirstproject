import React from 'react';
import { View, Text } from 'react-native'
import Nav from './Nav'
//2 types of components - 1. functional 2. class components

function App () {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Nav back={'white'} />
            <Text>ABout us Page</Text>
        </View>
    )
}

export default App;
