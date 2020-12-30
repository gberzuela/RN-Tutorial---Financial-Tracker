import React from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Think of this stack as the history from React Routers
// push/pop screens off to navigate
const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initalRouteName="Home">
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
