import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
// import SignUp from '../pages/SignUp';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#fff',
      // headerStyle: { backgroundColor: '#7159c1' },
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    {/* <Auth.Screen name="SignUp" component={SignUp} /> */}
  </App.Navigator>
);

export default AppRoutes;
