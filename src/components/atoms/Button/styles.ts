import { StyleSheet } from 'react-native';

// import { color } from '../../../const/variables';

export default StyleSheet.create({
    button: {
        // backgroundColor: color.lightBlue,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    large: {
        padding: 16,
        paddingHorizontal: 24,
    },
    small: {
        padding: 8,
    },
    contentWidth: {
        alignSelf: 'center',
    },
    border: {
        // borderColor: color.blue,
        borderWidth: 1,
    },
    fullColor: {
        // backgroundColor: color.blue,
    },
    disabled: {
        // borderColor: color.blueGray,
        borderWidth: 1,
        backgroundColor: '#A4B2CE33',
    },
    iconLeftlarge: {
        marginRight: 10,
    },
    iconRightlarge: {
        marginLeft: 10,
    },
    iconLeftsmall: {
        marginRight: 8,
    },
    iconRightsmall: {
        marginLeft: 8,
    },
    reverse: {
        flexDirection: 'row-reverse',
    },
    contentToTheSide: {
        justifyContent: 'flex-start',
    },
    noBackground: {
        backgroundColor: 'transparent',
    },
});
