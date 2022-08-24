import React, { useEffect } from 'react';
import { Text, View, TextInput as RNTextInput, StyleSheet, ScrollView, Pressable } from 'react-native';

import { TextInput } from '../../components';
import { RadioElement } from '../../components/Radio';

type InputTypes = 'firstName' | 'lastName' | 'email' | 'dob' | 'phone' | 'streetAddress' | 'apartmentNumber' | 'zipCode' | 'state' | 'idNumber' | 'idState';
type RadioInput = 'driverLicense' | 'nonDriver' | 'USMilitary' | 'USPassport';

export const LoansTabScreen = () => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [dob, setDob] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [streetAddress, setStreetAddress] = React.useState('');
	const [apartmentNumber, setApartmentNumber] = React.useState('');
	const [zipCode, setZipCode] = React.useState('');
	const [state, setState] = React.useState('');
	const [idNumber, setIdNumber] = React.useState('');
	const [idState, setIdState] = React.useState('');
	const [radioState, setRadioState] = React.useState<RadioInput>('driverLicense');

	const handleInput = (type: InputTypes, text: string) => {
		let newText = text.trim();

		switch (type) {
			case 'firstName':
				return setFirstName(newText);
			case 'lastName':
				return setLastName(newText);
			case 'email':
				return setEmail(newText);
			case 'dob':
				return setDob(text);
			case 'phone':
				return setPhone(newText);
			case 'streetAddress':
				return setStreetAddress(newText);
			case 'apartmentNumber':
				return setApartmentNumber(newText);
			case 'zipCode':
				return setZipCode(newText);
			case 'state':
				return setState(text);
			case 'idNumber':
				return setIdNumber(newText);
			case 'idState':
				return setIdState(newText);
		}
	};

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<View>
				<Text style={styles.heading}>Customer Information</Text>
			</View>
			<View>
				<Text style={styles.subHeading}>Personal Details</Text>
			</View>
			<View style={styles.groupInTwo}>
				<TextInput label={'First Name'} value={firstName} onChangeText={(value) => handleInput('firstName', value)} />
				<TextInput label={'Last Name'} value={lastName} onChangeText={(value) => handleInput('lastName', value)} />
			</View>
			<TextInput label={'Email'} value={email} onChangeText={(value) => handleInput('email', value)} />
			<View style={styles.groupInTwo}>
				<TextInput label={'Date of Birth'} value={dob} placeholder={'DD/MM/YYYY'} onChangeText={(value) => handleInput('dob', value)} />
				<TextInput label={'Phone Number'} value={phone} onChangeText={(value) => handleInput('phone', value)} />
			</View>

			<View>
				<Text style={styles.subHeading}>Address</Text>
			</View>
			<TextInput label={'Street Address'} value={streetAddress} onChangeText={(value) => handleInput('streetAddress', value)} />
			<View style={styles.groupInTwo}>
				<TextInput label={'Apartment Number'} value={apartmentNumber} onChangeText={(value) => handleInput('apartmentNumber', value)} />
				<TextInput label={'ZIP Code'} value={zipCode} onChangeText={(value) => handleInput('zipCode', value)} />
			</View>
			<TextInput label={'State'} value={state} onChangeText={(value) => handleInput('state', value)} />

			<View>
				<Text style={styles.subHeading}>Identification</Text>
			</View>
			{/* Radio Elements */}
			<View style={styles.radioContainer}>
				<RadioElement label='Driver License' value='driverLicense' radioState={radioState} setRadioState={setRadioState} />
				<RadioElement label='Non-Driver' value='nonDriver' radioState={radioState} setRadioState={setRadioState} />
				<RadioElement label='US Military' value='USMilitary' radioState={radioState} setRadioState={setRadioState} />
				<RadioElement label='US Passport' value='USPassport' radioState={radioState} setRadioState={setRadioState} />
			</View>

			<View style={styles.groupInTwo}>
				<TextInput label={'ID Number'} value={idNumber} onChangeText={(value) => handleInput('idNumber', value)} />
				<TextInput label={'ID State'} value={idState} onChangeText={(value) => handleInput('idState', value)} />
			</View>

			<View style={{marginBottom: 40}}>
				<Pressable />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	heading: {
		fontSize: 24,
		fontWeight: '700',
		color: 'black',
		marginTop: 20,
	},
	subHeading: {
		fontSize: 20,
		fontWeight: '500',
		color: 'black',
		marginTop: 20,
		marginBottom: 10
	},
	groupInTwo: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	radioContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
})