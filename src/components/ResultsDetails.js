import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

const ResultsDetails = ({result}) => {
    return <View>
        <Image source = {{uri:result.image_url}} style = {styles.Image}/>
        <Text style={styles.nameStyle}> {result.name} </Text>
        <Text style={styles.rating}> Rating: {result.rating} , Reviews: {result.review_count}</Text> 
    </View>
}

const styles = StyleSheet.create({
    Image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginLeft: 5,
        marginRight: 20   
    },
    nameStyle: {
        fontWeight: 'bold',
    },
    rating: {

    }
});

export default ResultsDetails