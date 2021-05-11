import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

const resultList = ({title,results}) => {
    return <View>
        <Text style = {styles.text}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={results => results.id}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>;
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default resultList;