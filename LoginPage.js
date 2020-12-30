import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginPage = ({ navigation }) => {
	return (
		<View>
			<Text>Login Page</Text>
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
};

export default LoginPage;
