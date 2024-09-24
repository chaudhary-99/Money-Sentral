import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const builders = [
  "Godrej Properties", "Supertech", "ATS", "Jaypee Greens", "Mahagun", "Amrapali", "Antriksh", "Ace",
  "NOIDA Development Authority", "Prateek", "Gardenia", "Sikka", "Paramount", "Paras Buildtech", "Gulshan Homz",
  "M3M", "Logix", "County Group", "Hale Realtors", "DLF", "Panchsheel", "Ajnara", "Parsvnath", "Aditya", "Apex",
  "Purvanchal", "3C", "Assotech", "Shri Group", "Sunshine", "SKA Group", "Newtech", "Sunworld", "Unnati",
  "Wave", "Unitech", "Gaurs", "Today Homes", "Saya Homes", "Shubhkamna", "Eldeco", "Dasnac", "Tata",
  "Ajnara", "Exotica", "Experion", "Renowned Group", "Amrapali", "Victory", "Mascot Group", "Max Estates",
  "Raheja Developers", "Indiabulls", "Emaar", "Ansal", "Omaxe"
];

const PropertyDetailsScreen = ({ navigation, form, setForm }) => {
  const [city, setCity] = useState(form.city || '');
  const [propertyType, setPropertyType] = useState(form.propertyType || '');
  const [propertyStatus, setPropertyStatus] = useState(form.propertyStatus || '');
  const [occupancyStatus, setOccupancyStatus] = useState(form.occupancyStatus || '');
  const [builder, setBuilder] = useState(form.builder || '');
  const [otherBuilder, setOtherBuilder] = useState(form.otherBuilder || '');
  const [apartmentName, setApartmentName] = useState(form.apartmentName || '');
  const [marketValue, setMarketValue] = useState(form.marketValue || '');

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Property Details</Text>

        <Text style={styles.label}>City</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={city}
            onValueChange={(value) => { setCity(value); handleInputChange('city', value); }}
            style={styles.picker}>
            <Picker.Item label="Select City" value="" />
            <Picker.Item label="Gurugram" value="Gurugram" />
            <Picker.Item label="NOIDA" value="NOIDA" />
            <Picker.Item label="Greater NOIDA" value="Greater NOIDA" />
            <Picker.Item label="Ghaziabad" value="Ghaziabad" />
            <Picker.Item label="Delhi" value="Delhi" />
          </Picker>
        </View>

        <Text style={styles.label}>Property Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={propertyType}
            onValueChange={(value) => { setPropertyType(value); handleInputChange('propertyType', value); }}
            style={styles.picker}>
            <Picker.Item label="Select Property Type" value="" />
            <Picker.Item label="Apartment" value="Apartment" />
            <Picker.Item label="Independent House" value="Independent House" />
          </Picker>
        </View>

        <Text style={styles.label}>Construction Status</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={propertyStatus}
            onValueChange={(value) => { setPropertyStatus(value); handleInputChange('propertyStatus', value); }}
            style={styles.picker}>
            <Picker.Item label="Select Status" value="" />
            <Picker.Item label="Completed" value="Completed" />
            <Picker.Item label="In Progress" value="In Progress" />
            <Picker.Item label="Not Started" value="Not Started" />
          </Picker>
        </View>

        <Text style={styles.label}>Occupancy Status</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={occupancyStatus}
            onValueChange={(value) => { setOccupancyStatus(value); handleInputChange('occupancyStatus', value); }}
            enabled={propertyStatus === 'Completed'}
            style={styles.picker}>
            <Picker.Item label="Select Occupancy" value="" />
            <Picker.Item label="Self Occupied" value="Self Occupied" />
            <Picker.Item label="Rented Out" value="Rented Out" />
            <Picker.Item label="Vacant" value="Vacant" />
          </Picker>
        </View>

        <Text style={styles.label}>Builder</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={builder}
            onValueChange={(value) => { setBuilder(value); handleInputChange('builder', value); }}
            enabled={propertyType === 'Apartment'}
            style={styles.picker}>
            <Picker.Item label="Select Builder" value="" />
            {builders.map((b, index) => <Picker.Item key={index} label={b} value={b} />)}
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        <Text style={styles.label}>Other Builder Name</Text>
        <TextInput
          style={styles.input}
          value={otherBuilder}
          onChangeText={(value) => { setOtherBuilder(value); handleInputChange('otherBuilder', value); }}
          editable={builder === 'Other'}
          placeholder="Enter Other Builder Name"
        />

        <Text style={styles.label}>Apartment Name</Text>
        <TextInput
          style={styles.input}
          value={apartmentName}
          onChangeText={(value) => { setApartmentName(value); handleInputChange('apartmentName', value); }}
          editable={propertyType === 'Apartment'}
          placeholder="Enter Apartment Name"
        />

        <Text style={styles.label}>Market Value (Rs Cr)</Text>
        <TextInput
          style={styles.input}
          value={marketValue}
          onChangeText={(value) => { if (/^\d*\.?\d*$/.test(value)) { setMarketValue(value); handleInputChange('marketValue', value); } }}
          keyboardType="numeric"
          placeholder="Enter Market Value"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LoanDetailsScreen')} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#333',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
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

export default PropertyDetailsScreen;
