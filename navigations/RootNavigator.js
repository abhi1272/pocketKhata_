import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

const RootNavigator = () => {

    const { state } = useContext(AuthContext)
        console.log(state.userToken)
    return (
        state.userToken ? <AppStack /> : <AuthStack />
    )
}

export default RootNavigator