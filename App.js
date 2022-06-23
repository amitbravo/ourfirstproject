import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native'
import Nav from './Nav'
import axios from 'axios'
//2 types of components - 1. functional 2. class components

function App () {

    // 3 keywords , let, var and const
    // let, var , const
    //var x = 5
    const [data , setData] = useState({ loading: true, userData: null, postData: null }) //



    useEffect(()=> {

      console.log('init')
      //let useID = '12312'
      //axios.post(`https://jsonplaceholder.typicode.com/todos/1`, { userID })
      axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(response => {
            console.log('response >',response.data)
            setData(prev =>  ({...prev, userData: response.data}))
        }).catch(error => {
            console.log('error',error)
          })


          axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => {
                console.log('response >',response.data)
                //setData(response.data)
                //setData({postData: response.data})
                setData(prev =>  ({...prev, loading: false, postData: response.data}))
            }).catch(error => {
                console.log('error',error)
                setData(prev =>  ({...prev, loading: false, }))
              })



    },[]) // compontDidMount()


    const renderItem = ({item}) => {
      return (
          <View style={{ padding: 10 }}>
              <Text>{item.title}</Text>
          </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            {data.userData !== null && (
              <>
              <Text>userID: {data.userId}</Text>
              <Text>Title: {data.title}</Text>
              </>
              )}


               <FlatList
                data={data.postData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />

        </View>
    )
}

export default App;
