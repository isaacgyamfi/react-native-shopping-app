import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircleo" size={30} />
        </TouchableOpacity>
        <View>
          <Text>Create an account</Text>
        </View>
      </View>
      <View>
        <Formik
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            passwordConfirm: ''
          }}
          onSubmit={(values, action) => {
            handleLogin(values);
          }}
        >
          {props => (
            <View style={styles.form}>
              <View style={styles.formInput}>
                <Text style={styles.inputTitle}>First name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('firstName')}
                  value={props.values.firstName}
                  placeholder="Eg. James"
                ></TextInput>
              </View>
              <View style={styles.formInput}>
                <Text style={styles.inputTitle}>Last name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('lastName')}
                  value={props.values.lastName}
                  placeholder="Eg. Osei"
                ></TextInput>
              </View>
              <View style={styles.formInput}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  placeholder="Eg. jamesosei@mail.com"
                ></TextInput>
              </View>
              <View style={styles.formInput}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                ></TextInput>
              </View>
              <View style={styles.formInput}>
                <Text style={styles.inputTitle}>Confirm password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  onChangeText={props.handleChange('passwordConfirm')}
                  value={props.values.passwordConfirm}
                ></TextInput>
              </View>
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={styles.submit}
              >
                <Text style={styles.loginBtn}>Create an account</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end'
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                >
                  <Text
                    style={{
                      color: '#971818',
                      textDecorationLine: 'underline'
                    }}
                  >
                    Log in here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10
  },
  form: {
    padding: 20
  },
  inputTitle: {
    color: '#971818'
  },
  input: {
    borderBottomColor: '#971818',
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 2,
    fontSize: 18,
    height: 40
  },
  formInput: {
    marginVertical: 5
  },
  submit: {
    height: 40,
    width: '100%',
    borderWidth: 2,
    borderColor: '#971818',
    backgroundColor: '#971818',
    borderRadius: 5,
    padding: 2,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  loginBtn: {
    alignSelf: 'center',
    alignContent: 'center',
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 5
  }
});

export default SignUpScreen;
