import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const LoanTypeScreen = ({ navigation, form, setForm, renderError }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Loan Type</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={form.loanType === 'Housing Loan'}
          onValueChange={() => setForm({ ...form, loanType: 'Housing Loan' })}
          tintColors={{ true: 'black', false: 'black' }}
        />
        <Text style={styles.label}>Housing Loan</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={form.loanType === 'Loan against Property'}
          onValueChange={() => setForm({ ...form, loanType: 'Loan against Property' })}
          tintColors={{ true: 'black', false: 'black' }}
        />
        <Text style={styles.label}>Loan against Property</Text>
      </View>
      {renderError('LoanType')}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PropertyDetailsScreen')} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#094268',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#094268',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoanTypeScreen;
