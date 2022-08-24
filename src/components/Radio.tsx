import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

interface IRadio {
	label: string;
	value: string;
	radioState: string;
	setRadioState: Function;
}

export const RadioElement = ({label, value, radioState, setRadioState}: IRadio) => {
	return (
		<View>
			{radioState === value ? (
				<TouchableOpacity style={[styles.radioElementContainer, styles.selected]}>
					<Image source={require('../assets/images/radioSelected.png')} style={styles.image} />
					<Text style={styles.radioLabel}>{label}</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={() => setRadioState(value)} style={styles.radioElementContainer}>
					<Image source={require('../assets/images/radioUnselected.png')} style={styles.image} />
					<Text style={styles.radioLabel}>{label}</Text>
				</TouchableOpacity>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	radioElementContainer: {
		flex: 1,
		flexDirection: 'row',
		minWidth: '47%',
		paddingVertical: 20,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: 'gray',
		marginBottom: 10
	},
	selected: {
		backgroundColor: '#e6f2ff',
	},
	image: {
		width: 20,
		height: 20,
	},
	radioLabel: {
		color: 'grey',
		marginLeft: 5
	}
})