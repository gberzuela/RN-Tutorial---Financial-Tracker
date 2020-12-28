import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	ScrollView,
	Text,
	TextInput,
	Button,
	View,
	SafeAreaView,
	Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import moment from 'moment';

const styles = StyleSheet.create({
	titleText: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	input: {
		margin: 20,
		padding: 20,
		height: 40,
		borderColor: 'red',
		borderWidth: 1,
	},
	chart: {
		marginVertical: 8,
		borderRadius: 16,
	},
});

const App = () => {
	const [desc, setDesc] = useState('');
	const [amount, setAmount] = useState('');
	const [total, setTotal] = useState(0);
	const [labels, setLabels] = useState(['Mon', 'Tue', 'Wed', 'Thu']);
	const [data, setData] = useState([
		{ [moment()]: 2000 },
		{ [moment().subtract(1, 'days')]: 2500 },
		{ [moment().subtract(2, 'days')]: 3500 },
		{ [moment().subtract(3, 'days')]: 4500 },
		{ [moment().subtract(4, 'days')]: 5500 },
	]);
	const [gigs, setGigs] = useState([]);

	const dataPoints = {
		labels,
		datasets: [{ data }],
	};

	const chartConfig = {
		backgroundColor: '#e26a00',
		backgroundGradientFrom: '#fb8c00',
		backgroundGradientTo: '#ffa726',
		decimalPlaces: 2,
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: {
			borderRadius: 16,
		},
		propsForDots: {
			r: '6',
			strokeWidth: '2',
			stroke: '#ffa726',
		},
	};

	// useEffect(() => {

	// }, [gigs])

	useEffect(() => {
		setTotal(gigs.reduce((result, next) => (result += Number(next.amount)), 0));
	}, [gigs]);

	const addGig = () => {
		setGigs([...gigs, { desc, amount, timestamp: new Date() }]);
		setDesc('');
		setAmount('');
	};

	return (
		<SafeAreaView>
			<View>
				<Text style={styles.titleText}>
					Hello World. Welcome to a React Native App.
				</Text>
			</View>
			<View>
				<Text>Daily tracker</Text>
				<LineChart
					data={dataPoints}
					width={Dimensions.get('window').width}
					height={220}
					yAxisLabel="$"
					yAxisInterval={1}
					chartConfig={chartConfig}
					bezier
					style={styles.chart}
					verticalLabelRotation={30}
				/>
			</View>

			<TextInput
				style={styles.input}
				value={desc}
				placeholder="Enter a description"
				onChangeText={(input) => setDesc(input)}
			/>
			<TextInput
				style={styles.input}
				value={amount}
				placeholder="Enter the amount you made in USD ($)"
				keyboardType="numeric"
				onChangeText={(text) => setAmount(text)}
			/>
			<Button disabled={!desc && !amount} onPress={addGig} title="Add Gig" />
			<ScrollView>
				<Text>Total Income: ${total}</Text>
				{gigs.map((gig, idx) => (
					<Text key={idx}>
						{gig.desc}: ${gig.amount}
					</Text>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
