import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

const LoginPage = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const login = () => {
		if (username === 'username' && password === 'password') {
			navigation.navigate('Home'); // loosely equals to something like this.props.history.push('/Home')
		}
	};

	return (
		<View>
			<Text>Login Page</Text>
			<TextInput
				style={styles.loginInput}
				value={username}
				placeholder="Username"
				onChangeText={(setUser) => setUsername(setUser)}
			/>
			<TextInput
				style={styles.loginInput}
				value={password}
				secureTextEntry={true}
				placeholder="Password"
				onChangeText={(setPW) => setPassword(setPW)}
			/>
			<Button title="Login" onPress={login} />
		</View>
	);
};

export default LoginPage;
