import React,{useState} from 'react';
import {Text,ScrollView,View,StyleSheet} from 'react-native';
import SearchBar from '../components/searchBar';
import ResultList from '../components/resultList';
import useResults from '../hook/useResult';



const searchScreen = () => {
    const [term,setTerm] = useState('');    //Search Term State
    const [searchAPI, results, error] = useResults({term});
    
    const filterByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
          return result.price === price;
        });
      };   
    //flex 1 to improve scrolling in small screened devices.
    return <View style={{flex : 1}} > 
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchAPI(term)}
        />
        {error ? <Text>{error}</Text> : null} 

        <ScrollView>        
        <ResultList
            title = "Pocket Friendly"
            results = {filterByPrice('$')}
        />
        <ResultList
            title = "Great"
            results = {filterByPrice('$$')}
        />
        <ResultList
            title = "Rain money"
            results = {filterByPrice('$$$')}
        />
        <Text style={styles.space}>
        </Text>
        </ScrollView>

    </View>
};

const styles = StyleSheet.create({
    space : {
        height: 10
    }
});

export default searchScreen;