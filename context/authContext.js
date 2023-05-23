import React, { useEffect, useReducer, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HTTP_METHODS, httpCall } from '../services/httpService';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      return prevState;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token from AsyncStorage or any other storage mechanism
        userToken = await AsyncStorage.getItem('token');
      } catch (e) {
        // Error retrieving token
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = {
    signIn: async (data) => {
      try {
        const response = await httpCall(HTTP_METHODS.POST, '/user/login', data);
        console.log(response)
        await AsyncStorage.setItem('token', response.data.token);

        dispatch({ type: 'SIGN_IN', token: response.data.token });
      } catch (error) {
        // Handle sign-in errors
      }
    },
    signOut: async () => {
      try {
        console.log('logout ho gys')
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'SIGN_OUT' });
      } catch (error) {
        // Handle sign-out errors
      }
    },
    signUp: async (data) => {
      try {
        // Perform sign-up logic and token persistence
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      } catch (error) {
        // Handle sign-up errors
      }
    },
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, authContext }}>
      {children}
    </AuthContext.Provider>
  );
};
