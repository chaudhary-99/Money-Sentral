import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Ensure @react-native-picker/picker is installed
import FontAwesome from 'react-native-vector-icons/FontAwesome';  // For FontAwesome icons

const ApplicantProfileScreen = ({ navigation }) => {
  const residingSinceYears = ['0-1 year', '1-3 years', '3-5 years', '5+ years'];

  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    maritalStatus: '',
    dependents: '',
    qualification: '',
    occupation: '',
    companyName: '',
    totalExperience: '',
    residenceType: '',
    residingSince: '',
    grossMonthlyIncome: '',
    netMonthlyIncome: '',
    cibilScore: '',
    coApplicant: '',
    coApplicantGender: '',
    coApplicantAge: '',
    coApplicantIncome: '',
    coApplicantCibil: '',
  });

  const [hideCoApplicantInputs, setHideCoApplicantInputs] = useState(true);
  const [showModal, setShowModal] = useState(false); // Modal state
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCoApplicantChange = (value) => {
    setFormData({ ...formData, coApplicant: value });
    setHideCoApplicantInputs(value === 'None');
    if (value === 'None') {
      handleInputChange('coApplicantGender', '');
      handleInputChange('coApplicantAge', '');
      handleInputChange('coApplicantIncome', '');
      handleInputChange('coApplicantCibil', '');
    }
  };



  const handleSubmit = () => {
    // Close the modal and navigate to the TermsAndConditionsScreen
    setShowModal(false);
    navigation.navigate('TermsAndConditionsScreen');
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Applicant Profile</Text>

      {/* Gender */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Gender <Text style={styles.asterisk}>*</Text></Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.gender}
            onValueChange={(value) => handleInputChange('gender', value)}
            style={styles.picker}>
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View>
      </View>

      {/* Age */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Age <Text style={styles.asterisk}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={formData.age}
          onChangeText={(value) => handleInputChange('age', value)}
          keyboardType="numeric"
          placeholder="Enter Age"
          placeholderTextColor="#666"
        />
      </View>

      {/* Marital Status */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Marital Status <Text style={styles.asterisk}>*</Text></Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.maritalStatus}
            onValueChange={(value) => handleInputChange('maritalStatus', value)}
            style={styles.picker}>
            <Picker.Item label="Select Marital Status" value="" />
            <Picker.Item label="Single" value="Single" />
            <Picker.Item label="Married" value="Married" />
          </Picker>
        </View>
      </View>

      {/* Dependents */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Dependents <Text style={styles.asterisk}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={formData.dependents}
          onChangeText={(value) => handleInputChange('dependents', value)}
          keyboardType="numeric"
          placeholder="Enter Dependents"
          placeholderTextColor="#666"
        />
      </View>

      {/* Qualification */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Qualification <Text style={styles.asterisk}>*</Text></Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.qualification}
            onValueChange={(value) => handleInputChange('qualification', value)}
            style={styles.picker}>
            <Picker.Item label="Select Qualification" value="" />
            <Picker.Item label="Graduate" value="Graduate" />
            <Picker.Item label="Post Graduate" value="Post Graduate" />
            <Picker.Item label="Doctorate" value="Doctorate" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      </View>

      {/* Occupation */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Occupation <Text style={styles.asterisk}>*</Text></Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.occupation}
            onValueChange={(value) => handleInputChange('occupation', value)}
            style={styles.picker}>
            <Picker.Item label="Select Occupation" value="" />
            <Picker.Item label="Salaried" value="Salaried" />
            <Picker.Item label="Professional" value="Professional" />
            <Picker.Item label="Business Owner" value="Business Owner" />
            <Picker.Item label="Consultant" value="Consultant" />
            <Picker.Item label="Self-Employed" value="Self-Employed" />
          </Picker>
        </View>
      </View>

      {/* Company Name */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Company Name <Text style={styles.asterisk}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={formData.companyName}
          onChangeText={(value) => handleInputChange('companyName', value)}
          placeholder="Enter Company Name"
          placeholderTextColor="#666"
        />
      </View>

      {/* Total Experience */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Total Experience (years)</Text>
        <TextInput
          style={styles.input}
          value={formData.totalExperience}
          onChangeText={(value) => handleInputChange('totalExperience', value)}
          keyboardType="numeric"
          placeholder="Enter Total Experience"
          placeholderTextColor="#666"
        />
      </View>

      {/* Residence Type */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Residence Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.residenceType}
            onValueChange={(value) => handleInputChange('residenceType', value)}
            style={styles.picker}>
            <Picker.Item label="Select Residence Type" value="" />
            <Picker.Item label="Own House" value="Own House" />
            <Picker.Item label="Rented" value="Rented" />
          </Picker>
        </View>
      </View>

      {/* Residing Since (years) */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Residing Since (years)</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.residingSince}
            onValueChange={(value) => handleInputChange('residingSince', value)}
            style={styles.picker}>
            {residingSinceYears.map((residingSince, index) => (
              <Picker.Item key={index} label={residingSince} value={residingSince} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Gross Monthly Income */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Gross Monthly Income (Rs) <Text style={styles.asterisk}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={formData.grossMonthlyIncome}
          onChangeText={(value) => handleInputChange('grossMonthlyIncome', value)}
          keyboardType="numeric"
          placeholder="Enter Gross Monthly Income"
          placeholderTextColor="#666"
        />
      </View>

      {/* Net Monthly Income */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Net Monthly Income (Rs) <Text style={styles.asterisk}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={formData.netMonthlyIncome}
          onChangeText={(value) => handleInputChange('netMonthlyIncome', value)}
          keyboardType="numeric"
          placeholder="Enter Net Monthly Income"
          placeholderTextColor="#666"
        />
      </View>

      {/* CIBIL Score */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>CIBIL Score <Text style={styles.asterisk}>*</Text></Text>
        <TextInput
          style={styles.input}
          value={formData.cibilScore}
          onChangeText={(value) => handleInputChange('cibilScore', value)}
          keyboardType="numeric"
          placeholder="Enter CIBIL Score"
          placeholderTextColor="#666"
        />
      </View>

      {/* Co-Applicant */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Co-Applicant</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.coApplicant}
            onValueChange={handleCoApplicantChange}
            style={styles.picker}>
            <Picker.Item label="None" value="None" />
            <Picker.Item label="Spouse" value="Spouse" />
            <Picker.Item label="Parent" value="Parent" />
            <Picker.Item label="Sibling" value="Sibling" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      </View>

      {/* Co-Applicant Fields */}
      {!hideCoApplicantInputs && (
        <>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Co-Applicant Gender</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.coApplicantGender}
                onValueChange={(value) => handleInputChange('coApplicantGender', value)}
                style={styles.picker}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Co-Applicant Age</Text>
            <TextInput
              style={styles.input}
              value={formData.coApplicantAge}
              onChangeText={(value) => handleInputChange('coApplicantAge', value)}
              keyboardType="numeric"
              placeholder="Enter Co-Applicant Age"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Co-Applicant Income (Rs)</Text>
            <TextInput
              style={styles.input}
              value={formData.coApplicantIncome}
              onChangeText={(value) => handleInputChange('coApplicantIncome', value)}
              keyboardType="numeric"
              placeholder="Enter Co-Applicant Income"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Co-Applicant CIBIL Score</Text>
            <TextInput
              style={styles.input}
              value={formData.coApplicantCibil}
              onChangeText={(value) => handleInputChange('coApplicantCibil', value)}
              keyboardType="numeric"
              placeholder="Enter Co-Applicant CIBIL Score"
              placeholderTextColor="#666"
            />
          </View>
        </>
      )}


      {/* Other form fields here... */}

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        {/* Next button that triggers the modal */}
        <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 50 }} />

      {/* Modal for confirmation */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Submission</Text>
            <Text style={styles.modalText}>Click 'Submit' to confirm or 'Cancel' to review the data.</Text>

            <View style={styles.modalButtonGroup}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setShowModal(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>   
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  asterisk: {
    color: 'red',  // Red asterisk for required fields
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    color: '#000',
    backgroundColor: '#f9f9f9',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    height: 50,
    color: '#000',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#094268',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
   // Modal styles
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  modalButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  submitButton: {
    backgroundColor: '#5cb85c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ApplicantProfileScreen;

