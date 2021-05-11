import { useEffect, useState } from 'react';
import google from '../API/google';

export default ({term}) => {
    
    const [results,setResult] = useState([]); //Result from API state
    const [error,setErrorMessage] = useState('');
    const searchAPI = async () => {     //async is used for all network requests
        try {
            const response = await google.get('/search', {
                params: {                //params required for the API
                limit: 50,              //limiting search till 50 results
                term: term,             //passing the search param
                location: 'san jose'    //passing location param
                }
            });
            setResult(response.data.businesses);
            console.log("Searched");
        } 
        catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchAPI('pasta');
  }, []);

  return [searchAPI, results, error];    //returning the required variables using array
};
