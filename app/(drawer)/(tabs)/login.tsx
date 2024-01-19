import { Text, View, TextInput } from 'react-native';
import { useForm, Resolver } from 'react-hook-form';
import Constants from 'expo-constants';
import Button from '@src/components/atoms/Button';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { supabase } from '@src/utils/supabase';

type FormValues = {
    user: string;
    password: string;
};

const resolver: Resolver<FormValues> = (values) => {
    const error = {
        user: {
            type: 'required',
            message: 'This is required.',
        },
        password: {
            type: 'required',
            message: 'This is required.',
        },
    };

    return {
        values: values.user ? values : {},
        errors: !values.user ? error : {},
    };
};

const Login = () => {
    const { styles } = useStyles(stylesheet);

    const {
        register,
        setValue,
        // handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });

    const onSubmit = async (data) => {
        try {
            const { data: userData, error } = await supabase.auth.signUp({
                email: 'someone@email.com',
                password: 'clxEolSsBmywwTryuobQ',
            });
            console.log('data', data, userData, error);
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput
                {...register('user')}
                style={styles.input}
                onChangeText={(text) => setValue('user', text)}
            />
            {errors.user && <Text style={{ color: 'red' }}>{errors.user.message}</Text>}
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                {...register('password')}
                secureTextEntry
                style={styles.input}
                onChangeText={(text) => setValue('password', text)}
            />
            {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}

            <View style={styles.buttonContainer}>
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                {/* <Button label="Login" onPress={handleSubmit(onSubmit)} /> */}
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <Button label="Login" onPress={onSubmit} />
            </View>
        </View>
    );
};

const stylesheet = createStyleSheet({
    label: {
        margin: 20,
        marginLeft: 0,
    },
    buttonContainer: {
        paddingVertical: 16,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        padding: 10,
        borderRadius: 4,
    },
});

export default Login;
