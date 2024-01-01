import React from 'react';
import { View } from 'react-native';
import Text from '../Text';

import Toggle, { ToggleProps, ToggleRef } from './index';

export default {
    title: 'Toggle',
    component: Toggle,
    argTypes: {
        isOn: {
            control: { type: 'boolean' },
        },
    },
};

export const Toggles = (args: ToggleProps) => {
    let ref = React.useRef<ToggleRef>();
    // TODO: Ref is not working, no time to check it out and fix
    // console.log('ref', ref);
    return (
        <View>
            <Toggle {...args} style={{ margin: 16, alignSelf: 'center' }} ref={ref} />
            {/* {ref.current && (
        <Text>
          Current status of toggle: {ref.current?.isToggled ? 'ON' : 'OFF'}
        </Text>
      )} */}
        </View>
    );
};

Toggles.args = {};
