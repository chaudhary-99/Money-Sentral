// // import React, { useState } from 'react';
// // import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
// // import CheckBox from '@react-native-community/checkbox';

// // const TermsAndConditionsScreen = ({ navigation }) => {
// //   const [isAccepted, setIsAccepted] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleCheckboxChange = () => {
// //     setIsAccepted(!isAccepted);
// //   };

// //   const handleSubmit = () => {
// //     if (isAccepted) {
// //       setIsLoading(true);
// //       // Simulating submission process
// //       setTimeout(() => {
// //         setIsLoading(false);
// //         // Navigate to next screen after submission
// //         navigation.navigate('NextScreen');
// //       }, 2000);
// //     }
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <Text style={styles.heading}>Terms and Conditions</Text>

// //       <View style={styles.termsContent}>
// //         <Text style={styles.subHeading}>1. User Confirmation and Accuracy of Information</Text>
// //         <Text style={styles.text}>By submitting your information to our application, you hereby confirm that:</Text>
// //         <Text style={styles.text}>1.1. You have provided accurate, true, and complete information to the best of your knowledge.</Text>
// //         <Text style={styles.text}>1.2. You have not concealed or misrepresented any material facts.</Text>
// //         <Text style={styles.text}>1.3. You understand that providing false information may result in the rejection of your application and potential legal consequences.</Text>

// //         <Text style={styles.subHeading}>2. User Consent to Data Collection and Sharing</Text>
// //         <Text style={styles.text}>By using our services, you consent to the collection, storage, and sharing of your personal and financial data.</Text>
        
// //         <Text style={styles.subHeading}>3. General Terms and Conditions</Text>
// //         <Text style={styles.text}>3.1. You agree to use our services solely for lawful purposes.</Text>
// //         <Text style={styles.text}>3.2. You agree not to use our services for any fraudulent or malicious activities.</Text>

// //         {/* More Terms can be added similarly */}
// //       </View>

// //       <View style={styles.termsAcceptance}>
// //         <CheckBox
// //           value={isAccepted}
// //           onValueChange={handleCheckboxChange}
// //           tintColors={{ true: '#094268', false: '#094268' }} // Set checkbox color
// //         />
// //         <Text style={styles.checkboxLabel}>I accept the Terms and Conditions.</Text>
// //       </View>

// //       <View style={styles.submitContainer}>
// //         <TouchableOpacity
// //           style={[styles.submitButton, { backgroundColor: isAccepted ? '#094268' : '#ccc' }]}
// //           onPress={handleSubmit}
// //           disabled={!isAccepted || isLoading}
// //         >
// //           {isLoading ? (
// //             <ActivityIndicator size="small" color="#094268" />
// //           ) : (
// //             <Text style={styles.submitButtonText}>Submit</Text>
// //           )}
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flexGrow: 1, // Ensure content grows to fill available space
// //     padding: 20,
// //     backgroundColor: '#ffffff', // Changed to white background
// //   },
// //   heading: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //     color: '#094268', // Changed heading color
// //   },
// //   termsContent: {
// //     marginBottom: 20,
// //   },
// //   subHeading: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginTop: 15,
// //     marginBottom: 10,
// //     color: '#094268', // Changed subheading color to match
// //   },
// //   text: {
// //     color: '#000000', // Changed text color to black
// //     fontSize: 14,
// //   },
// //   termsAcceptance: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   checkboxLabel: {
// //     marginLeft: 10,
// //     fontSize: 16,
// //     color: '#000000', // Changed checkbox label color to black
// //   },
// //   submitContainer: {
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   submitButton: {
// //     paddingVertical: 10,
// //     paddingHorizontal: 30,
// //     borderRadius: 5,
// //   },
// //   submitButtonText: {
// //     color: '#ffffff', // Changed submit button text color to white
// //     fontSize: 16,
// //   },
// // });

// // export default TermsAndConditionsScreen;
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';

// const TermsAndConditionsScreen = ({ navigation }) => {
//   const [isAccepted, setIsAccepted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsAccepted(!isAccepted);
//   };

//   const handleSubmit = () => {
//     if (isAccepted) {
//       setIsLoading(true);
//       // Simulating submission process
//       setTimeout(() => {
//         setIsLoading(false);
//         // Navigate to next screen after submission
//         navigation.navigate('NextScreen');
//       }, 2000);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Terms and Conditions</Text>

//       <View style={styles.termsContent}>
//         {/* Add terms content here */}
//         <Text style={styles.subHeading}>1. User Confirmation and Accuracy of Information</Text>
//         <Text style={styles.text}>By submitting your information to our application, you hereby confirm that:</Text>
//         <Text style={styles.text}>1.1. You have provided accurate, true, and complete information to the best of your knowledge.</Text>
//         <Text style={styles.text}>1.2. You have not concealed or misrepresented any material facts.</Text>
//         <Text style={styles.text}>1.3. You understand that providing false information may result in the rejection of your application and potential legal consequences.</Text>

//         <Text style={styles.subHeading}>2. User Consent to Data Collection and Sharing</Text>
//         <Text style={styles.text}>By using our services, you consent to the collection, storage, and sharing of your personal and financial data.</Text>
        
//         <Text style={styles.subHeading}>3. General Terms and Conditions</Text>
//         <Text style={styles.text}>3.1. You agree to use our services solely for lawful purposes.</Text>
//         <Text style={styles.text}>3.2. You agree not to use our services for any fraudulent or malicious activities.</Text>

//         <Text style={styles.subHeading}>4. Intellectual Property</Text>
//         <Text style={styles.text}>All content, trademarks, and data on our application, including but not limited to software, databases, text, graphics, and icons, are the property of Money Sentral or its licensors. You may not copy, reproduce, or use any of our intellectual property without our prior written consent.</Text>

//         <Text style={styles.subHeading}>5. Limitation of Liability</Text>
//         <Text style={styles.text}>We strive to provide accurate and up-to-date information but do not warrant that all information provided is error-free or complete. We shall not be liable for any damages arising out of your use of our services.</Text>

//         <Text style={styles.subHeading}>6. Indemnification</Text>
//         <Text style={styles.text}>You agree to indemnify and hold us harmless from any claims, damages, or expenses (including legal fees) arising from your use of our services or your violation of these Terms and Conditions.</Text>

//         <Text style={styles.subHeading}>7. Privacy Policy</Text>
//         <Text style={styles.text}>Our Privacy Policy outlines how we collect, use, and protect your personal data. By using our services, you agree to the terms of our Privacy Policy.</Text>

//         <Text style={styles.subHeading}>8. Governing Law</Text>
//         <Text style={styles.text}>These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.</Text>

//         <Text style={styles.subHeading}>9. Contact Information</Text>
//         <Text style={styles.text}>For any questions or concerns regarding these Terms and Conditions, please contact us at contact@moneysentral.com.</Text>
//       </View>

//       <View style={styles.termsAcceptance}>
//         <CheckBox
//           value={isAccepted}
//           onValueChange={handleCheckboxChange}
//           tintColors={{ true: '#094268', false: '#094268' }} // Set checkbox color
//         />
//         <Text style={styles.checkboxLabel}>I accept the Terms and Conditions.</Text>
//       </View>

//       <View style={styles.submitContainer}>
//         <TouchableOpacity
//           style={[styles.submitButton, { backgroundColor: isAccepted ? '#094268' : '#ccc' }]}
//           onPress={handleSubmit}
//           disabled={!isAccepted || isLoading}
//         >
//           {isLoading ? (
//             <ActivityIndicator size="small" color="#094268" />
//           ) : (
//             <Text style={styles.submitButtonText}>Submit</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1, // Ensure content grows to fill available space
//     padding: 20,
//     backgroundColor: '#ffffff', // Changed to white background
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#094268', // Changed heading color
//   },
//   termsContent: {
//     marginBottom: 20,
//   },
//   subHeading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 15,
//     marginBottom: 10,
//     color: '#094268', // Changed subheading color to match
//   },
//   text: {
//     color: '#000000', // Changed text color to black
//     fontSize: 14,
//   },
//   termsAcceptance: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   checkboxLabel: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#000000', // Changed checkbox label color to black
//   },
//   submitContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   submitButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//   },
//   submitButtonText: {
//     color: '#ffffff', // Changed submit button text color to white
//     fontSize: 16,
//   },
// });

// export default TermsAndConditionsScreen;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const TermsAndConditionsScreen = ({ navigation }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxChange = () => {
    setIsAccepted(!isAccepted);
  };

  const handleSubmit = () => {
    if (isAccepted) {
      setIsLoading(true);
      // Simulating submission process
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to next screen after submission
        navigation.navigate('NextScreen');
      }, 2000);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Terms and Conditions</Text>

      <View style={styles.termsContent}>
        {/* Full Terms and Conditions text merged under headings */}

        <Text style={styles.subHeading}>1. User Confirmation and Accuracy of Information</Text>
        <Text style={styles.text}>By submitting your information to our web application, you hereby confirm that:</Text>
        <Text style={styles.text}>1.1. You have provided accurate, true, and complete information to the best of your knowledge.</Text>
        <Text style={styles.text}>1.2. You have not concealed or misrepresented any material facts.</Text>
        <Text style={styles.text}>1.3. You understand that providing false information or concealing material facts may result in the rejection of your application and potential legal consequences.</Text>
        
        <Text style={styles.subHeading}>2. User Consent to Data Collection and Sharing</Text>
        <Text style={styles.text}>By using our services, you consent to the following:</Text>
        <Text style={styles.text}>2.1. Collection of your personal and financial data as necessary to provide our services.</Text>
        <Text style={styles.text}>2.2. Storage of your data in our secure databases.</Text>
        <Text style={styles.text}>2.3. Sharing of your data with financial institutions and other third parties as required to process your loan applications and find suitable loan offers for you.</Text>
        <Text style={styles.text}>2.4. Use of your data for analytics, research, and improving our services, ensuring that your data is anonymized when used for these purposes.</Text>

        <Text style={styles.subHeading}>3. General Terms and Conditions</Text>
        <Text style={styles.text}>3.1. Definitions</Text>
        <Text style={styles.text}>In these Terms and Conditions:</Text>
        <Text style={styles.text}>"We", "us", "our" refer to Money Sentral.</Text>
        <Text style={styles.text}>"You", "your" refer to the user of our services.</Text>
        <Text style={styles.text}>"Services" refer to the loan matching and related services provided by us through our web application.</Text>
        <Text style={styles.text}>3.2. Eligibility</Text>
        <Text style={styles.text}>3.2.1. You must be at least 18 years old to use our services.</Text>
        <Text style={styles.text}>3.2.2. You must be a resident of India to be eligible for our services.</Text>

        <Text style={styles.subHeading}>4. Intellectual Property</Text>
        <Text style={styles.text}>All content, trademarks, and data on our web application, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of Money Sentral or its licensors. You may not copy, reproduce, or use any of our intellectual property without our prior written consent.</Text>

        <Text style={styles.subHeading}>5. Limitation of Liability</Text>
        <Text style={styles.text}>We strive to provide accurate and up-to-date information but do not warrant that all information provided is error-free or complete. We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use of our services.</Text>

        <Text style={styles.subHeading}>6. Indemnification</Text>
        <Text style={styles.text}>You agree to indemnify and hold us harmless from any claims, damages, or expenses (including legal fees) arising from your use of our services or your violation of these Terms and Conditions.</Text>

        <Text style={styles.subHeading}>7. Privacy Policy</Text>
        <Text style={styles.text}>Our Privacy Policy, available at <Text style={styles.link}>https://moneysentral.com/privacypolicy</Text>, outlines how we collect, use, and protect your personal data. By using our services, you agree to the terms of our Privacy Policy.</Text>

        <Text style={styles.subHeading}>8. Changes to Terms and Conditions</Text>
        <Text style={styles.text}>8.1. We reserve the right to modify these Terms and Conditions at any time.</Text>
        <Text style={styles.text}>8.2. Any changes will be effective immediately upon posting on our web application. Your continued use of our services constitutes your acceptance of the revised Terms and Conditions.</Text>

        <Text style={styles.subHeading}>9. Governing Law</Text>
        <Text style={styles.text}>These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.</Text>

        <Text style={styles.subHeading}>10. Contact Information</Text>
        <Text style={styles.text}>For any questions or concerns regarding these Terms and Conditions, please contact us at contact@moneysentral.com.</Text>
        
        <Text style={styles.subHeading}>Acceptance of Terms</Text>
        <Text style={styles.text}>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</Text>
      </View>

      <View style={styles.termsAcceptance}>
        <CheckBox
          value={isAccepted}
          onValueChange={handleCheckboxChange}
          tintColors={{ true: '#094268', false: '#094268' }} // Set checkbox color
        />
        <Text style={styles.checkboxLabel}>I accept the Terms and Conditions.</Text>
      </View>

      <View style={styles.submitContainer}>
        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: isAccepted ? '#094268' : '#ccc' }]}
          onPress={handleSubmit}
          disabled={!isAccepted || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#094268" />
          ) : (
            <Text style={styles.submitButtonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff', // Changed to white background
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#094268', // Changed heading color
  },
  termsContent: {
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#094268', // Changed subheading color to match
  },
  text: {
    color: '#000000', // Changed text color to black
    fontSize: 14,
  },
  link: {
    color: '#094268', // Hyperlink color
    textDecorationLine: 'underline',
  },
  termsAcceptance: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000000', // Changed checkbox label color to black
  },
  submitContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#ffffff', // Changed submit button text color to white
    fontSize: 16,
  },
});

export default TermsAndConditionsScreen;

