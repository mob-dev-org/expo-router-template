import React from 'react';

import Input, { InputProps } from './index';

export default {
    title: 'Input',
    component: Input,
    argTypes: {},
};

export const Inputs = (args: InputProps) => {
    const [text, setText] = React.useState<string>('');

    return (
        <>
            <Input value={text} onChangeText={setText} {...args} style={{ margin: 16, alignSelf: 'center' }} />
            <Input
                value={text + text + text + text + text + text}
                {...args}
                multiline
                style={{ margin: 16, alignSelf: 'center' }}
            />
        </>
    );
};

Inputs.args = {};
