import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';
import EditOccurrence from '../pages/EditOccurrence';
import NewOccurrence from '../pages/NewOccurrence';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="CreateUser"
                component={CreateUser}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="EditOccurrence"
                component={EditOccurrence}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="NewOccurrence"
                component={NewOccurrence}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;