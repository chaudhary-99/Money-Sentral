import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PersonalInformationScreen = ({ navigation, form, setForm, renderError }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
            style={styles.input}
            placeholder="Enter full name"
            placeholderTextColor="#777"
          />
          {renderError('name')}
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Mobile</Text>
          <TextInput
            value={form.mobile}
            onChangeText={(text) => setForm({ ...form, mobile: text })}
            style={styles.input}
            placeholder="Enter mobile number"
            keyboardType="numeric"
            placeholderTextColor="#777"
          />
          {renderError('mobile')}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
            placeholderTextColor="#777"
          />
          {renderError('email')}
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Work Email</Text>
          <TextInput
            value={form.workEmail}
            onChangeText={(text) => setForm({ ...form, workEmail: text })}
            style={styles.input}
            placeholder="Enter work email"
            keyboardType="email-address"
            placeholderTextColor="#777"
          />
          {renderError('workEmail')}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous button is disabled on the first screen */}
        <TouchableOpacity
          style={[styles.button, { opacity: 0.5 }]}
          disabled={true}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('LoanTypeScreen')}
          style={styles.button}
        >
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    color: '#333',
    marginBottom: 15,
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
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});

export default PersonalInformationScreen;
