import React from 'react';
import { TextInput as RNTextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';

interface ITextInput {
	label: string;
}

export const TextInput = ({label, ...props}: ITextInput & TextInputProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<RNTextInput style={styles.textInput} {...props} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		minWidth: '47%',
		paddingVertical: 2,
		paddingHorizontal: 20,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: 'grey',
		marginBottom: 10
	},
	label: {
		color: 'grey',
	},
	textInput: {
		lineHeight: 24,
		paddingVertical: 2,
	}
})