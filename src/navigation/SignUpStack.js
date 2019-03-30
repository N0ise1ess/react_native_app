import { Button, Icon, Right } from 'native-base';
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import {SignUpScreenThirdPart, SignUpScreenFirstPart, SignUpScreenSecondPart} from '../modules/auth';
import { CustomIcon } from '../modules/shared/components/custom-icon';

import { styles } from './styles';

const SignUpStack = createStackNavigator(
    {
        SignUpFirstScreen: SignUpScreenFirstPart,
        SignUpSecondScreen: SignUpScreenSecondPart,
        SignUpThirdScreen: SignUpScreenThirdPart,
    },
    {
        initialRouteName: 'SignUpFirstScreen',
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
