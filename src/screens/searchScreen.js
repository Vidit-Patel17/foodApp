import React,{useState} from 'react';
import {Text,Buttons,View,StyleSheet} from 'react-native';
import SearchBar from '../components/searchBar';
import google from '../API/google';
import ResultList from '../components/resultList';

const searchScreen = () => {
    const [term,setTerm] = useState('');    //Search Term State
    const [results,setResult] = useState([]); //Result from API state
    const [error,setErrorMessage] = useState('');
    const searchAPI = async () => {     //async is used for all network requests
        try {
            const response = await google.get('/search', {
              params: {                 //params required for the API
                limit: 50,              //limiting search till 50 results
                term: term,             //passing the search param
                location: 'san jose'    //passing location param
              }
            });
            setResult(response.data.businesses);
            console.log(response.data.businesses);
          } 
          catch (err) {
            setErrorMessage('Something went wrong');
          }
    }

    return <View>
        <SearchBar
            term = {term}
              termChange = {newTerm => setTerm(newTerm) }
            onSubmit = {() => searchAPI()} //making API Result using a helper function 
        />
        <ResultList
            title = "Pocket Friendly"
            results = {results}
        />
        <ResultList
            title = "Great"
            results = {results}
        />
        <ResultList
            title = "Rain money"
            results = {results}
        />
    </View>
};

const styles = StyleSheet.create({

});

export default searchScreen;