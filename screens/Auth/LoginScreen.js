import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleLogin = values => {};
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginVertical: 30 }}>
          <Text>Login</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 45,
            borderWidth: 2,
            borderColor: '#971818',
            height: 90,
            width: 90
          }}
        >
          <MaterialCommunityIcons
            name="account-key"
            color="#971818"
            size={70}
          />
        </View>
        <View>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, action) => {
              handleLogin(values);
            }}
          >
            {props => (
              <View style={styles.form}>
                <View style={styles.formInput}>
                  <Text style={styles.inputTitle}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    placeholder="jamesosei@mail.com"
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
                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={styles.submit}
                >
                  <Text style={styles.loginBtn}>Login</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Reset Password');
                    }}
                  >
                    <Text>Forget password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Sign Up');
                    }}
                  >
                    <Text>Create new account</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center'
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

export default LoginScreen;
