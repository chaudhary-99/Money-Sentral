// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

const RegisterScreen = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    workEmail: '',
    mobile: '',
    loanType: '',
    city: '',
    propertyType: '',
    builder: '',
    currentEMI: '',
    refinancePref: '',
    gender: '',
    age: '',
    maritalStatus: '',
    infoCorrect: false,
  });

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateFields = () => {
    let errors = {};
    if (step === 1) {
      if (!form.name) errors.name = 'Name is required';
      if (!form.email || !validateEmail(form.email)) errors.email = 'A valid email is required';
      if (!form.workEmail || !validateEmail(form.workEmail)) errors.workEmail = 'A valid work email is required';
      if (!form.mobile || isNaN(form.mobile)) errors.mobile = 'A valid mobile number is required';
      if (!form.loanType) errors.loanType = 'Loan type is required';
    } else if (step === 2) {
      if (!form.city) errors.city = 'City is required';
      if (!form.propertyType) errors.propertyType = 'Property type is required';
      if (!form.builder) errors.builder = 'Builder name is required';
      if (!form.currentEMI || isNaN(form.currentEMI)) errors.currentEMI = 'A valid EMI is required';
    } else if (step === 3) {
      if (!form.gender) errors.gender = 'Gender is required';
      if (!form.age || isNaN(form.age)) errors.age = 'A valid age is required';
      if (!form.maritalStatus) errors.maritalStatus = 'Marital status is required';
      if (!form.infoCorrect) errors.infoCorrect = 'Please confirm that all information is correct';
    }
    return errors;
  };

  const renderError = (field) => {
    if (errors[field]) {
      return <Text style={styles.errorText}>{errors[field]}</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {step === 1 && (
          <View style={styles.formSection}>
            <Text style={styles.heading}>Personal Information</Text>
            <TextInput
              placeholder="Name"
              value={form.name}
              onChangeText={(text) => {
                setForm({ ...form, name: text });
                if (errors.name) {
                  setErrors({ ...errors, name: null });
                }
              }}
              style={styles.input}
            />
            {renderError('name')}

            <TextInput
              placeholder="Email"
              value={form.email}
              onChangeText={(text) => {
                setForm({ ...form, email: text });
                if (errors.email) {
                  setErrors({ ...errors, email: null });
                }
              }}
              keyboardType="email-address"
              style={styles.input}
            />
            {renderError('email')}

            <TextInput
              placeholder="Work Email"
              value={form.workEmail}
              onChangeText={(text) => {
                setForm({ ...form, workEmail: text });
                if (errors.workEmail) {
                  setErrors({ ...errors, workEmail: null });
                }
              }}
              keyboardType="email-address"
              style={styles.input}
            />
            {renderError('workEmail')}

            <TextInput
              placeholder="Mobile"
              value={form.mobile}
              onChangeText={(text) => {
                setForm({ ...form, mobile: text });
                if (errors.mobile) {
                  setErrors({ ...errors, mobile: null });
                }
              }}
              keyboardType="numeric"
              style={styles.input}
            />
            {renderError('mobile')}

            <TextInput
              placeholder="Loan Type"
              value={form.loanType}
              onChangeText={(text) => {
                setForm({ ...form, loanType: text });
                if (errors.loanType) {
                  setErrors({ ...errors, loanType: null });
                }
              }}
              style={styles.input}
            />
            {renderError('loanType')}
          </View>
        )}

        {step === 2 && (
          <View style={styles.formSection}>
            <Text style={styles.heading}>Property Details</Text>
            <TextInput
              placeholder="City"
              value={form.city}
              onChangeText={(text) => {
                setForm({ ...form, city: text });
                if (errors.city) {
                  setErrors({ ...errors, city: null });
                }
              }}
              style={styles.input}
            />
            {renderError('city')}

            <TextInput
              placeholder="Property Type"
              value={form.propertyType}
              onChangeText={(text) => {
                setForm({ ...form, propertyType: text });
                if (errors.propertyType) {
                  setErrors({ ...errors, propertyType: null });
                }
              }}
              style={styles.input}
            />
            {renderError('propertyType')}

            <TextInput
              placeholder="Builder"
              value={form.builder}
              onChangeText={(text) => {
                setForm({ ...form, builder: text });
                if (errors.builder) {
                  setErrors({ ...errors, builder: null });
                }
              }}
              style={styles.input}
            />
            {renderError('builder')}

            <TextInput
              placeholder="Current Loan EMI"
              value={form.currentEMI}
              onChangeText={(text) => {
                setForm({ ...form, currentEMI: text });
                if (errors.currentEMI) {
                  setErrors({ ...errors, currentEMI: null });
                }
              }}
              keyboardType="numeric"
              style={styles.input}
            />
            {renderError('currentEMI')}
          </View>
        )}

        {step === 3 && (
          <View style={styles.formSection}>
            <Text style={styles.heading}>Applicant Profile</Text>
            
            {/* Gender Picker */}
            <Text style={styles.label}>Gender</Text>
            <Picker
              selectedValue={form.gender}
              onValueChange={(itemValue) => {
                setForm({ ...form, gender: itemValue });
                if (errors.gender) {
                  setErrors({ ...errors, gender: null });
                }
              }}
              style={styles.picker}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
            {renderError('gender')}

            {/* Age Input */}
            <TextInput
              placeholder="Age"
              value={form.age}
              onChangeText={(text) => {
                setForm({ ...form, age: text });
                if (errors.age) {
                  setErrors({ ...errors, age: null });
                }
              }}
              keyboardType="numeric"
              style={styles.input}
            />
            {renderError('age')}

            {/* Marital Status Picker */}
            <Text style={styles.label}>Marital Status</Text>
            <Picker
              selectedValue={form.maritalStatus}
              onValueChange={(itemValue) => {
                setForm({ ...form, maritalStatus: itemValue });
                if (errors.maritalStatus) {
                  setErrors({ ...errors, maritalStatus: null });
                }
              }}
              style={styles.picker}
            >
              <Picker.Item label="Select Marital Status" value="" />
              <Picker.Item label="Single" value="single" />
              <Picker.Item label="Married" value="married" />
              <Picker.Item label="Divorced" value="divorced" />
            </Picker>
            {renderError('maritalStatus')}

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={form.infoCorrect}
                onValueChange={(newValue) => {
                  setForm({ ...form, infoCorrect: newValue });
                  if (errors.infoCorrect) {
                    setErrors({ ...errors, infoCorrect: null });
                  }
                }}
                tintColors={{ true: '#36d0a4', false: '#ccc' }}
              />
              <Text style={styles.label}>All information is correct</Text>
            </View>
            {renderError('infoCorrect')}
          </View>
        )}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button} disabled={step === 1}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        {step < 3 ? (
          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => Alert.alert('Form Submitted')} style={styles.submitButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formSection: {
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    color: '#094268',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    backgroundColor: '#36d0a4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  submitButton: {
    backgroundColor: '#094268',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
