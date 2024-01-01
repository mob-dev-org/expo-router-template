import Text, { TextProps } from './index';

export default {
    title: 'Text',
    component: Text,
    argTypes: {
        weight: {
            options: ['regular', 'medium', 'semiBold', 'bold'],
            control: { type: 'select' },
        },
        center: {
            control: { type: 'boolean' },
        },
        uppercase: {
            control: { type: 'boolean' },
        },
        color: {
            options: [
                'black',
                'white',
                'blueGray',
                'gray',
                'gray2',
                'lightGray',
                'green',
                'red',
                'blue',
                'lightBlue',
                'lightGrayWithOpacity',
            ],
            control: { type: 'select' },
        },
        themeColor: {
            options: [
                'papir',
                'plastikametal',
                'staklo',
                'mjesoviti',
                'bio',
                'glomazni',
                'otok',
                'dvoriste',
                'tekstil',
                'ostalo',
            ],
            control: { type: 'select' },
        },
    },
};

export const Typography = (args: TextProps) => {
    return (
        <>
            <Text {...args} size={32}>
                Typography size:32
            </Text>

            <Text {...args} size={24}>
                Typography size:24
            </Text>

            <Text {...args} size={20}>
                Typography size:20
            </Text>

            <Text {...args} size={18}>
                Typography size:18
            </Text>

            <Text {...args} size={16}>
                Typography size:16
            </Text>

            <Text {...args} size={14}>
                Typography size:14
            </Text>

            <Text {...args} size={13}>
                Typography size:13
            </Text>

            <Text {...args} size={12}>
                Typography size:12
            </Text>

            <Text {...args} size={11}>
                Typography size:11
            </Text>

            <Text {...args} size={8}>
                Typography size:8
            </Text>

            <Text {...args} weight="bold" size={20}>
                Typography Bold : Figma 700
            </Text>

            <Text {...args} weight="semiBold" size={20}>
                Typography SemiBold : Figma 600
            </Text>

            <Text {...args} weight="medium" size={20}>
                Typography Medium : Figma 500
            </Text>

            <Text {...args} weight="regular" size={20}>
                Typography Regular : Figma 400
            </Text>
        </>
    );
};

Typography.args = {
    weight: 'regular',
    color: 'black',
    uppercase: false,
};
