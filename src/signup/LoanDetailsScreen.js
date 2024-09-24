import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const LoanDetailScreen = ({ navigation }) => {
  const [emi, setEmi] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [outstandingLoan, setOutstandingLoan] = useState('');
  const [endDate, setEndDate] = useState({ month: '', year: '' });
  const [bankName, setBankName] = useState('');
  const [expectedSavings, setExpectedSavings] = useState('');
  const [maxEmi, setMaxEmi] = useState('');
  const [reduceEmi, setReduceEmi] = useState(false);
  const [reduceTenure, setReduceTenure] = useState(false);

  const handleNext = () => {
    // Navigate to the ApplicantProfileScreen when "Next" is clicked
    navigation.navigate('ApplicantProfileScreen');
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Section for Current Loan */}
      <View style={styles.boxContainer}>
        <Text style={styles.subHeading}>Current Loan</Text>

        <View style={styles.column}>
          <Text style={styles.label}>
            EMI (Rs) <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={emi}
            onChangeText={setEmi}
            keyboardType="numeric"
            placeholder="Enter EMI"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>
            Interest Rate (%) <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={interestRate}
            onChangeText={setInterestRate}
            keyboardType="numeric"
            placeholder="Enter Interest Rate"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>
            Outstanding Loan (Rs) <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={outstandingLoan}
            onChangeText={setOutstandingLoan}
            keyboardType="numeric"
            placeholder="Enter Outstanding Loan"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>
            End Date <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.dateRow}>
            <TextInput
              style={styles.dateInput}
              value={endDate.month}
              onChangeText={(month) => setEndDate({ ...endDate, month })}
              placeholder="MM"
              placeholderTextColor="#666"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.dateInput}
              value={endDate.year}
              onChangeText={(year) => setEndDate({ ...endDate, year })}
              placeholder="YYYY"
              placeholderTextColor="#666"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>
            Bank Name <Text style={styles.required}>*</Text>
          </Text>
          <Picker
            selectedValue={bankName}
            onValueChange={setBankName}
            style={styles.picker}>
            <Picker.Item label="Select Bank" value="" />
            <Picker.Item label="Bank A" value="Bank A" />
            <Picker.Item label="Bank B" value="Bank B" />
          </Picker>
        </View>
      </View>

      {/* Section for Refinancing Preference */}
      <View style={styles.boxContainer}>
        <Text style={styles.subHeading}>Refinancing Preference</Text>

        <View style={styles.column}>
          <TouchableOpacity onPress={() => setReduceEmi(!reduceEmi)}>
            <Text style={styles.checkbox}>{reduceEmi ? '☑' : '☐'} Reduce EMI</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setReduceTenure(!reduceTenure)}>
            <Text style={styles.checkbox}>{reduceTenure ? '☑' : '☐'} Reduce Tenure</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>
            Expected Savings (Rs) <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={expectedSavings}
            onChangeText={setExpectedSavings}
            keyboardType="numeric"
            placeholder="Enter Expected Savings"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>Maximum EMI (Rs)</Text>
          <TextInput
            style={styles.input}
            value={maxEmi}
            onChangeText={setMaxEmi}
            keyboardType="numeric"
            placeholder="Enter Maximum EMI"
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Add extra space at the bottom */}
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 50, // Add padding to ensure the last buttons are visible
  },
  boxContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  column: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  required: {
    color: 'red',
    fontSize: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    color: '#000',
    fontSize: 16,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    color: '#000',
    marginRight: 5,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  checkbox: {
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#094268',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 5,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoanDetailScreen;
