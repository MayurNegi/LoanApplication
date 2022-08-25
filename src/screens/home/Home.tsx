import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';
import { LoanState } from '../loans-tab/appliedLoanSlice';


export const HomeScreen = () => {
	const loans = useSelector((state) => state.appliedLoan);

	const renderLoanItem = ({item}) => {
		return (
			<View style={styles.loanCard}>
				<View>
					<Text style={styles.subHeading}>Personal Details:</Text>
					<Text>First Name: {item?.personalDetails?.firstName}</Text>
					<Text>Last Name: {item?.personalDetails?.lastName}</Text>
					<Text>Email: {item?.personalDetails?.email}</Text>
					<Text>Date of Birth: {item?.personalDetails?.dob}</Text>
					<Text>Phone: {item?.personalDetails?.phone}</Text>
				</View>
				<View>
					<Text style={styles.subHeading}>Address:</Text>
					<Text>Street Address: {item?.address?.streetAddress}</Text>
					<Text>Apartment Number: {item?.address?.apartmentNumber}</Text>
					<Text>ZIP Code: {item?.address?.zipCode}</Text>
					<Text>State: {item?.address?.state}</Text>
				</View>
				<View>
					<Text style={styles.subHeading}>Identification:</Text>
					<Text>Residential Proof: {item?.identification?.residentialProof}</Text>
					<Text>ID Number: {item?.identification?.idNumber}</Text>
					<Text>ID State: {item?.identification?.idState}</Text>
				</View>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container} >
			<Text style={styles.heading}>Your Loans:</Text>
			<View style={styles.loanList}>
				{loans.length !== 0 ? (
					<FlatList
						data={loans}
						keyExtractor={(loan) => `${loan.personalDetails.phone} + ${loan.identification.idNumber} + ${loan.address.apartmentNumber}`}
						renderItem={renderLoanItem}
						showsVerticalScrollIndicator={false}
					/>
				) : (
					<View>
						<Text>No Loans Applied. Go to the Loans Tab to apply for a loan.</Text>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		paddingHorizontal: 20,
	},
	heading: {
		fontSize: 24,
		fontWeight: '700',
		marginVertical: 20,
		color: 'black',
	},
	subHeading: {
		fontSize: 18,
		fontWeight: '500',
		marginTop: 10,
		marginBottom: 4
	},
	loanList: {
		marginBottom: 80
	},
	loanCard: {
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderWidth: 2,
		borderColor: 'grey',
		borderRadius: 30,
		marginBottom: 30
	}
})