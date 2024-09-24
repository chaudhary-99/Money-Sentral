import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from './SignUpScreen';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [counter, setCounter] = useState(60);

  const navigation = useNavigation();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSendOtp = () => {
    setCanResend(false);
    setCounter(60);
    setIsLoading(true);

    setTimeout(() => {
      setOtpSent(true);
      setIsLoading(false);
      Alert.alert('OTP Sent', 'OTP has been sent to your email.');
    }, 1500);
  };

  const handleLogin = () => {
    setIsLoginLoading(true);

    setTimeout(() => {
      setIsLoginLoading(false);
      Alert.alert('Login Success', 'You are now logged in!');
      navigation.replace('HomeScreen');
    }, 2000);
  };

  useEffect(() => {
    if (!otpSent) return;

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [otpSent]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        color="#000"
      />

      {!otpSent ? (
        <>
          <TouchableOpacity
            style={[styles.button, emailPattern.test(email) ? styles.buttonEnabled : styles.buttonDisabled]}
            onPress={handleSendOtp}
            disabled={!emailPattern.test(email) || isLoading}
          >
            {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Send OTP</Text>}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            placeholderTextColor="#999"
            color="#000"
          />
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoginLoading || !otp}>
              {isLoginLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.resendButton]} onPress={handleSendOtp} disabled={!canResend}>
              <Text style={styles.buttonText}>{canResend ? 'Resend OTP' : `${counter}s to Resend`}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

<TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
  <Text style={styles.signupText}>
    Don't have an account? <Text style={styles.signupLink}>Sign up here.</Text>
  </Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.savingButton}>
        <Text style={styles.buttonText}>Saving Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#094268',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonEnabled: {
    backgroundColor: '#094268',
  },
  resendButton: {
    backgroundColor: '#094268',
  },
  savingButton: {
    backgroundColor: '#094268',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'column',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
