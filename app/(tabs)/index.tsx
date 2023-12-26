import { useForm, Resolver } from 'react-hook-form';
import Constants from 'expo-constants';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { hitSlop } from '@src/constants/hitSlop';
import colors, { getColorWithOpacity } from '@src/constants/colors';
import RememberMeButton from '@src/components/atoms/rememberMe';
import Color from 'color';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import icon from '../../src/assets/logo';
import { SvgProps } from 'react-native-svg';
import { Divider } from 'react-native-elements/dist/divider/Divider';

type FormValues = {
    user: string;
    password: string;
};
export interface IconProps {
    name?: typeof icon | null;
    size?: number;
    style?: ViewStyle;
    addBlack?: boolean;
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.user ? values : {},
        errors: !values.user
            ? {
                  user: {
                      type: 'required',
                      message: 'This is required.',
                  },
                  password: {
                      type: 'required',
                      message: 'This is required.',
                  },
              }
            : {},
    };
};

export default function Login() {
    const Icond: FunctionComponent<IconProps> = ({ name, size = 16, style, addBlack }) => {
        if (!name) return null;

        const iconName = addBlack ? `${name}Black` : name;
        const IconComponent = icon as FunctionComponent<SvgProps>;

        return <IconComponent width={size} height={size} style={style} />;
    };

    // const [isRemembered, setIsRemembered] = useState(false); //feature for remember me button

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    // const [locked, setLocked] = useState(true); //feature for pasword visibility
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = async () => {
        if (password === 'Psihologija2024' && mail === 'psiholog@gmail.com') {
            router.replace('/screens/home');
            console.log('logged in');
            await AsyncStorage.setItem('isLoggedIn', 'true');

            AsyncStorage.getItem('isLoggedIn').then((value) => {
                if (value === 'true') {
                    setIsLoggedIn(true);
                } else {
                }
            });
        } else {
            alert('Prijava nije uspjela. Molimo provjerite šifru.');
        }
    };
    //feature for remember me button
    // React.useEffect(() => {
    //     AsyncStorage.getItem('rememberMe').then((value) => {
    //         if (value === 'true') {
    //             setIsRemembered(true);
    //         } else {
    //             setIsRemembered(false);
    //         }
    //     });
    // }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Icond name={icon} size={100} style={{ alignSelf: 'center' }} />
                    <Text style={styles.title}>PsychAssist</Text>
                </View>
                <View style={{ marginHorizontal: 80 }}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="e-mail"
                            onChangeText={(text) => setMail(text)}
                            defaultValue=""
                            value={mail}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="šifra"
                            onChangeText={(text) => setPassword(text)}
                            defaultValue=""
                            value={password}
                            secureTextEntry={true}
                        />

                        {/* <Pressable onPress={() => setLocked(!locked)} hitSlop={hitSlop}>
                            <Icon name={locked ? 'lock' : 'lock-open'} size={20} color={colors.blue} />
                        </Pressable> */}
                    </View>
                    <TouchableOpacity onPress={() => alert('trenutno samo pokazno')}>
                        <Text style={{ color: '#30A8EB', textAlign: 'left', fontSize: 12, marginBottom: 8 }}>
                            Zaboravili šifru?
                        </Text>
                    </TouchableOpacity>
                    <Divider />

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Prijavite se</Text>
                    </TouchableOpacity>
                    {/* <RememberMeButton /> */}
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Text style={{ textAlign: 'left', fontSize: 12, marginBottom: 8 }}>Nemate račun? </Text>
                        <Pressable onPress={() => alert('trenutno samo pokazno')}>
                            <Text style={{ color: '#30A8EB', textAlign: 'left', fontSize: 12, marginBottom: 8 }}>
                                Registrujte se
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    // if (loading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text style={{ fontSize: 24 }}>Loading...</Text>
    //             <ActivityIndicator size={32} testID="list-indicator" />
    //         </View>
    //     );
    // }

    // if (error) {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={styles.alert}>
    //                 Bez internetske veze! Da biste nastavili, molimo povežite se s internetom.
    //             </Text>
    //         </View>
    //     );
    // }
}

const styles = StyleSheet.create({
    label: {
        color: 'white',
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
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 32,
        marginBottom: 20,
        marginLeft: 8,
        color: '#000',
        textAlign: 'center',
        fontWeight: '500',
        fontStyle: 'normal',
    },
    alert: {
        margin: 24,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    inputContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 1,
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 16,
    },

    button: {
        backgroundColor: '#30A8EB',
        borderRadius: 5,
        padding: 4,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
    },
    input: {
        backgroundColor: 'white',
        height: 32,
        padding: 4,
        borderRadius: 4,
    },
});
