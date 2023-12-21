import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet, Button } from 'react-native';
// import { getLocales } from 'expo-localization';
import { initLanguageDetector } from '@src/languages';
import { useEffect, useState } from 'react';
import { useLanguageName } from '@src/stores';

const Home = () => {
    const { language, setlanguage } = useLanguageName();
    const [change, setChange] = useState(true);
    useEffect(() => {
        initLanguageDetector(language).finally(() => {});
    }, [change]);
    const changeLanguage = () => {
        setChange(!change);
        setlanguage(change ? 'bs-BA' : 'en-US');
    };
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Change language</Text>
            <Button title="Translate" onPress={changeLanguage} />
            <Text style={styles.subtitle}>{t('languageSelector')}</Text>
            <Text style={styles.subtitle}>{t('hello')}</Text>
            <Text style={styles.subtitle}>{t('languageName')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },

    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 24,
    },
});

export default Home;
