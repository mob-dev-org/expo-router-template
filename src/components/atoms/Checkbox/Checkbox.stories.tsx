import React from 'react';
import {View} from 'react-native';
import Checkbox, {CheckboxProps} from './index';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: {type: 'boolean'},
    },
  },
};

export const Checkboxes = (args: CheckboxProps) => {
  return (
    <View style={{backgroundColor: '#ccc'}}>
      <Checkbox {...args} style={{margin: 16, alignSelf: 'center'}} />
      <Checkbox
        {...args}
        checked={!args.checked}
        style={{margin: 16, alignSelf: 'center'}}
      />
    </View>
  );
};

Checkboxes.args = {};
