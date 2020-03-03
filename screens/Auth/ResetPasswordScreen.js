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
const ResetPassword = () => {
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
          <Text>Reset password</Text>
        </View>
      </View>
      <View>
        <Formik
          initialValues={{ email: '' }}
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
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={styles.submit}
              >
                <Text style={styles.loginBtn}>Reset password</Text>
              </TouchableOpacity>
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

export default ResetPassword;
