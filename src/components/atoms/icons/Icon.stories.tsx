import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppIcon, { AppIconProps } from './AppIcon';
import ChevronImage, { ChevronButtonImageProps } from './ChevronImage';

export default {
    title: 'Icons',
    component: AppIcon,
    argTypes: {
        size: {
            options: [16, 24, 32, 48, 64],
            control: { type: 'select' },
            defaultValue: 24,
        },
        color: {
            options: ['#faf', '#000', '#fff', '#f00', '#0f0', '#00f', '#ff0'],
            control: { type: 'select' },
            defaultValue: '#faf',
        },
    },
};

export const AppIcons = (args: AppIconProps) => {
    const renderIcon = (props: AppIconProps) => (
        <View style={styles.iconDemoContainer} key={props.name}>
            <AppIcon {...props} {...args} />
            <Text style={styles.iconDemoName}>{props.name}</Text>
        </View>
    );

    const icons: AppIconProps[] = [
        { name: 'back' },
        { name: 'bell' },
        { name: 'bell-off' },
        { name: 'calendar' },
        { name: 'check' },
        { name: 'close' },
        { name: 'close-circle' },
        { name: 'edit' },
        { name: 'x' },
        { name: 'barcode' },
        { name: 'chevron-down' },
        { name: 'chevron-up' },
    ];

    return <ScrollView>{icons.map(renderIcon)}</ScrollView>;
};

export const ChevronImages = (args: ChevronButtonImageProps) => {
    const renderIcon = (props: ChevronButtonImageProps) => (
        <View style={styles.iconDemoContainer} key={props.name}>
            <ChevronImage {...props} {...args} />
            <Text style={styles.iconDemoName}>{props.name}</Text>
        </View>
    );

    const icons: ChevronButtonImageProps[] = [
        { name: 'chevron-down' },
        { name: 'chevron-left' },
        { name: 'chevron-right' },
        { name: 'chevron-up' },
    ];

    return <ScrollView>{icons.map(renderIcon)}</ScrollView>;
};

const styles = StyleSheet.create({
    iconDemoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    iconDemoName: { marginLeft: 8, fontSize: 24 },
});
