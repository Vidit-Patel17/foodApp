import React,{useState} from 'react';
import {Text,Buttons,View,StyleSheet} from 'react-native';
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

    return <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchAPI(term)}
        />
        {error ? <Text>{error}</Text> : null} 
        
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
    </View>
};

const styles = StyleSheet.create({

});

export default searchScreen;