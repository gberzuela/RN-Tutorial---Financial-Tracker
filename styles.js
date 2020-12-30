// Having a StyleSheet is important b/c it catches errors
// Passing a normal style object to a component will run even if there are errors
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	titleText: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	input: {
		margin: 20,
		height: 40,
		borderColor: 'red',
		borderWidth: 1,
	},
	chart: {
		marginVertical: 8,
		borderRadius: 16,
	},
	loginInput: {
		margin: 20,
		height: 40,
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default styles;
