import React from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import { NavigationContainer } from '@react-navigation/native';
// ^^ loosely equals to Router from react-router-dom
import { createStackNavigator } from '@react-navigation/stack';

// Think of this stack as the history from React Routers
// push/pop screens off to navigate
const Stack = createStackNavigator();
// Stack.Screen loosely equals to Route from react-router-dome

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen
					name="Login"
					component={LoginPage}
					options={{ title: 'Sign In or Sign Up' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
