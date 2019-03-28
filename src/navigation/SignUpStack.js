import { Button, Icon, Right } from 'native-base';
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import {SignUpScreenThree, SignUpScreenOne, SignUpScreenTwo} from '../modules/auth';
import { CustomIcon } from '../modules/shared/components/custom-icon';

import { styles } from './styles';

const SignUpStack = createStackNavigator(
    {
        SignUp1: SignUpScreenOne,
        SignUp2: SignUpScreenTwo,
        SignUp3: SignUpScreenThree,
    },
    {
        initialRouteName: 'SignUp1',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle,
            headerRight: (
                <Right>
                    <Button transparent onPress={() => navigation.navigate('Settings')}>
                        <CustomIcon name={"settings"} style={styles.rightIconStyle} />
                    </Button>
                </Right>
            ),
        }),
    },
);

export default createAppContainer(SignUpStack);
