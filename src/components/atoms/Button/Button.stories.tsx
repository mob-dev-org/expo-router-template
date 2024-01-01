import React from 'react';
import { ScrollView, View } from 'react-native';
import Text from '../Text';

import Button, { ButtonProps } from './index';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        style: {
            table: {
                disable: true,
                control: false,
            },
        },
        size: {
            options: ['small', 'large'],
            control: { type: 'select' },
        },
        uppercase: {
            control: { type: 'boolean' },
        },
        label: {
            control: { type: 'text' },
        },
        reverse: {
            control: { type: 'boolean' },
        },
        contentWidth: {
            control: { type: 'boolean' },
        },
        border: {
            control: { type: 'boolean' },
        },
        contentToTheSide: {
            control: { type: 'boolean' },
        },
        icon: {
            options: [
                'back',
                'bell',
                'bell-off',
                'calendar',
                'check',
                'close',
                'edit',
                'filter',
                'flash-off',
                'flash-on',
                'globe',
                'heart',
                'home',
                'mail',
                'map-pin',
                'map',
                'navigation',
                'news',
                'phone-call',
                'plus',
                'profile',
                'settings',
                'smile',
                'trash',
                'truck',
                'x',
                'chevron-down',
                'chevron-up',
                'barcode',
            ],
            control: { type: 'select' },
        },
    },
};

export const Buttons = (args: ButtonProps) => {
    args.style = { margin: 8 };
    return (
        <ScrollView style={{ paddingHorizontal: 16 }}>
            <Button {...args} size="small" label="Main color" contentWidth mainColor="red" />
            <Button {...args} size="small" label="Small Button" contentWidth />
            <Button {...args} size="small" label="Small Button" contentWidth reverse border />
            <Button {...args} label="Content width" contentWidth />
            <Button {...args} icon="calendar" label="Reversed Button" reverse contentWidth />

            <Button {...args} />
            <Button {...args} icon="bell" label="With icon" />
            <Button {...args} icon="calendar" label="Reversed Button" reverse />
            <Button {...args} label="With border" border />
            <Button {...args} icon="bell" label="With icon & border" border />
            <Button {...args} label="Disabled" disabled />
        </ScrollView>
    );
};

Buttons.args = {
    label: 'Button',
};
