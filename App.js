import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import searchScreen from './src/screens/searchScreen';
import resultShowScreen from './src/screens/resultsShowScreen';

const navigator = createStackNavigator ({
    search: searchScreen,
    result: resultShowScreen
  },
  {
  initialRouteName : 'search',
  //to Set default properties of each screen
  defaultNavigationOptions:{
    title: "Food Search" //header of all screens would be food
  }
});

export default createAppContainer(navigator);