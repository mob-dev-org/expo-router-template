import React from 'react';
import { View } from 'react-native';

import Text from '../Text';

import Divider, { DividerProps } from './index';

export default {
    title: 'Divider',
    component: Divider,
    argTypes: {},
};

export const Dividers = (args: DividerProps) => {
    return (
        <View style={{ margin: 16 }}>
            <Text>Divider</Text>
            <Divider {...args} style={{ margin: 16, alignSelf: 'center' }} />
            <Text>Divider red</Text>
            <Divider {...args} backgroundColor="red" style={{ margin: 16, alignSelf: 'center' }} />
            <Text>Divider 2</Text>
            <Divider {...args} height={2} style={{ margin: 16, alignSelf: 'center' }} />
            <Text>Divider 4</Text>
            <Divider {...args} height={4} style={{ margin: 16, alignSelf: 'center' }} />
        </View>
    );
};

Dividers.args = {};
