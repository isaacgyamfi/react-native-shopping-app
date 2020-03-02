import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';

const CardPaymentScreen = () => {
  return (
    <View>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          color: '#971818'
        }}
      >
        Pay here
      </Text>
      <Formik
        initialValues={{ name: '', cardNumber: '', cvv: '', expiryDate: '' }}
        onSubmit={(values, action) => {
          handleLogin(values);
        }}
      >
        {props => (
          <View style={styles.form}>
            <View style={styles.formInput}>
              <Text style={styles.inputTitle}>Card number</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                onChangeText={props.handleChange('cardNumber')}
                value={props.values.cardNumber}
              ></TextInput>
            </View>
            <View style={styles.formInput}>
              <Text style={styles.inputTitle}>Name on card</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                onChangeText={props.handleChange('name')}
                value={props.values.name}
              ></TextInput>
            </View>
            <View style={styles.formInput}>
              <Text style={styles.inputTitle}>CVV</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                keyboardType="number-pad"
                onChangeText={props.handleChange('cvv')}
                value={props.values.cvv}
              ></TextInput>
            </View>
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={{
                height: 50,
                width: 100,
                borderWidth: 2,
                borderColor: '#971818',
                backgroundColor: '#971818',
                borderRadius: 5,
                padding: 2,
                marginVertical: 5,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                flexDirection: 'row'
              }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  alignContent: 'center',
                  color: '#fff',
                  fontSize: 18,
                  marginHorizontal: 5
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20
  },
  inputTitle: {
    color: '#971818'
  },
  input: {
    borderColor: '#971818',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 2,
    fontSize: 18,
    height: 50
  },
  formInput: {
    marginVertical: 5
  }
});

export default CardPaymentScreen;
