import React from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetails from "../components/ResultsDetails";
import {withNavigation} from 'react-navigation';

const resultList = ({title , results , navigation}) => {
    if(!results.length)
        return null
    return <View>
        <Text style = {styles.text}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator= {false}  //hiding scrollbar
            data={results}
            keyExtractor={results => results.id}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity onPress = {() => navigation.navigate('result',{id: item.id})} > 
                        <ResultsDetails result = {item} />
                    </TouchableOpacity>
                )
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

export default withNavigation(resultList);