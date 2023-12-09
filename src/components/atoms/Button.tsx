import { Text, Pressable, PressableProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface ButtonProps extends PressableProps {
    onPress: () => void;
    title?: string;
}

const Button = ({ onPress, title = 'Button', ...rest }: ButtonProps) => {
    const { styles } = useStyles(stylesheet);

    return (
        <Pressable style={styles.button} onPress={onPress} {...rest}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const stylesheet = createStyleSheet((theme) => ({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: theme.colors.typography,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
}));

export default Button;
