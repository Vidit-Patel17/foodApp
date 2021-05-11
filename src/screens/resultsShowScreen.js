import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet, Image,FlatList, ScrollView} from 'react-native';
import google from '../API/google';


const resultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result,setResult] = useState(null);

    const getResults = async (id) => {
        const response = await google.get(`/${id}`)
        setResult(response.data);
        
    }

    useEffect(() => {
        getResults(id);
    }, [])

    if(!result)
        return null;

        console.log(result);
    return <View style = {{flex : 1}}>
        <ScrollView>
            <Text style = {{fontSize: 18 ,fontWeight: 'bold'}} >{result.name}</Text>
            <Text>Contact: {result.phone}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem = { ({item}) => {
                    return <Image style = {styles.imageStyle} source= {{uri : item}}/> 
                }}
            />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        marginVertical: 10,
        borderRadius: 4
    }
});

export default resultShowScreen