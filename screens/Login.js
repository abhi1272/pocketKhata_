import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable
} from 'react-native';

import { COLORS } from '../utils/constants';
import { AuthContext } from '../context/authContext';
import { HTTP_METHODS, httpCall } from '../services/httpService';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = React.useContext(AuthContext).authContext;
  return (
    <View style={styles.container}>
      <View style={{marginTop: '25%'}}>
        <Text style={styles.formHeading}>Enter Credentials</Text>
        <TextInput
          placeholderTextColor={COLORS.TEXT_LIGHT}
          style={styles.formInput}
          value={email}
          secureTextEntry={false}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor={COLORS.TEXT_LIGHT}
          inputMode='text'
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          style={styles.formInput}
          placeholder="Password"
        />
      </View>
      {/* <Button title="Sign in" onPress={() => signIn({email, password})} /> */}
      <Pressable onPress={() => signIn({email, password})}>
        <View style={styles.button}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>
            Submit
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formInput: {
    height: 60,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    borderRadius: 10,
  },
  button: {
    marginBottom: 350,
    padding: 16,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 15,
  },
  formHeading: {
    marginVertical: 16,
    color: COLORS.TEXT_LIGHT,
    fontSize: 18,
    textAlign: 'center',
  },
});
