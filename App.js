import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import searchScreen from './src/screens/searchScreen';

const navigator = createStackNavigator ({
    search: searchScreen,
  },
  {
  initialRouteName : 'search',
  //to Set default properties of each screen
  defaultNavigationOptions:{
    title: "Google search" //header of all screens would be food
  }
});

export default createAppContainer(navigator);