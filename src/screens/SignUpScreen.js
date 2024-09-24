import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalInformationScreen from '../signup/PersonalInformationScreen';  
import LoanTypeScreen from '../signup/LoanTypeScreen';  
import PropertyDetailsScreen from '../signup/PropertyDetailsScreen';
import LoanDetailScreen from '../signup/LoanDetailsScreen';
import ApplicantProfileScreen from '../signup/ApplicantProfileScreen';
import TermsAndConditionsScreen from '../signup/TermsAndConditionsScreen';

const Stack = createStackNavigator();

const SignUpScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    workEmail: '',
    mobile: '',
    loanType: '',
  });

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let errors = {};
    if (!form.name) errors.name = 'Full Name is required';
    if (!form.email) errors.email = 'Email is required';
    if (!form.workEmail) errors.workEmail = 'Work Email is required';
    if (!form.mobile) errors.mobile = 'Mobile is required';
    if (!form.loanType) errors.loanType = 'Loan Type is required';
    return errors;
  };

  const renderError = (field) => {
    if (errors[field]) {
      return <Text style={{ color: 'red' }}>{errors[field]}</Text>;
    }
    return null;
  };

  return (
    <Stack.Navigator initialRouteName="PersonalInformationScreen">
      <Stack.Screen name="PersonalInformationScreen">
        {(props) => (
          <PersonalInformationScreen
            {...props}
            form={form}
            setForm={setForm}
            renderError={renderError}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="LoanTypeScreen">
        {(props) => (
          <LoanTypeScreen
            {...props}
            form={form}
            setForm={setForm}
            renderError={renderError}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="PropertyDetailsScreen">
        {(props) => (
          <PropertyDetailsScreen
            {...props}
            form={form}
            setForm={setForm}
            renderError={renderError}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
          name="LoanDetailsScreen"  // This name must match what you're using in `navigate()`
          component={LoanDetailScreen}
          options={{ title: 'Loan Details' }}
        />
        <Stack.Screen
          name="ApplicantProfileScreen"  // This name must match what you're using in `navigate()`
          component={ApplicantProfileScreen}
          options={{ title: 'Applicant Profile' }}
        />
         <Stack.Screen
        name="TermsAndConditionsScreen"  // Add the Terms and Conditions screen
        component={TermsAndConditionsScreen}
        options={{ title: 'Terms and Conditions' }}
      />
    </Stack.Navigator>
  );
};

export default SignUpScreen;
