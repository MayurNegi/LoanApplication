import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {save} from './appliedLoanSlice';
import { TextInput } from '../../components';
import { RadioElement } from '../../components/Radio';
import {flashMessage} from '../../lib/flash-message';

type InputTypes = 'firstName' | 'lastName' | 'email' | 'dob' | 'phone' | 'streetAddress' | 'apartmentNumber' | 'zipCode' | 'state' | 'idNumber' | 'idState';
export type RadioInput = 'driverLicense' | 'nonDriver' | 'USMilitary' | 'USPassport';

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

	const count = useSelector((state: any) => state.appliedLoan.phone);
	const dispatch = useDispatch();

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
				return setDob(newText);
			case 'phone':
				return setPhone(newText);
			case 'streetAddress':
				return setStreetAddress(newText);
			case 'apartmentNumber':
				return setApartmentNumber(newText);
			case 'zipCode':
				return setZipCode(newText);
			case 'state':
				return setState(newText);
			case 'idNumber':
				return setIdNumber(newText);
			case 'idState':
				return setIdState(newText);
		}
	};

	const canSubmit = () => {
		return firstName && lastName && email && dob && phone && streetAddress && apartmentNumber && zipCode && state && idNumber && idState;
	}

	const validateEmail = (email: string) => {
		return String(email)
			.toLowerCase()
			.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	};

	const handleSubmit = () => {
		const phoneInt = parseInt(phone, 10);
		const apartmentNumberInt = parseInt(apartmentNumber, 10);

		// showing one error at a time
		if(!validateEmail(email)) {
			flashMessage.error('Type a valid email format!');
		} else if(!phoneInt) {
			flashMessage.error('Type a number in phone field!');
		} else if (phone.length !== 10) {
			flashMessage.error('Type 10 numbers in phone field!');
		} else if(!apartmentNumberInt) {
			flashMessage.error('Type a number in Apartment Number field!');
		} else {
			const payload = {
				personalDetails : {firstName, lastName, email, dob, phone},
				address: {streetAddress, apartmentNumber, zipCode, state},
				identification: {
					residentialProof: radioState,
					idNumber,
					idState
				}
			}
			dispatch(save(payload));
		}
		// TODO: validate DOB
	}

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
				<TouchableOpacity style={[styles.submit, !canSubmit() && {backgroundColor: 'grey'}]} onPress={handleSubmit} disabled={!canSubmit()} >
					<Text style={styles.submitText}>Submit</Text>
				</TouchableOpacity>
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
	},
	submit: {
		width: '100%',
		backgroundColor: '#1a75ff',
		flex: 1,
		alignItems: 'center',
		paddingVertical: 15,
		marginTop: 20,
		borderRadius: 20

	},
	submitText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '700'
	}
})