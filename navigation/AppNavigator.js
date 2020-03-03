import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainApp from './BottomTabNavigation';
import Auth from './AuthNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Auth: Auth,
    Main: MainApp
  })
);
