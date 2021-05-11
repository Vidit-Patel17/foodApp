import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const resultList = ({title,results}) => {
    return <View>
        <Text style = {styles.text}>{title}</Text>
        <Text>{results.length}</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default resultList;