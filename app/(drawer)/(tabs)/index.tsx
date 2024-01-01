import { useTranslation } from 'react-i18next';
import { Text, View, Button } from 'react-native';
import { useLanguage } from '@src/languages/languagesStore';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Home = () => {
    const { t } = useTranslation();
    const { toggleLanguage } = useLanguage();
    const { styles } = useStyles(stylesheet);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Change language</Text>
            <Button title="Translate" onPress={toggleLanguage} />
            <Text style={styles.subtitle}>{t('languageSelector')}</Text>
            <Text style={styles.subtitle}>{t('hello')}</Text>
            <Text style={styles.subtitle}>{t('tabTwo', { ns: 'navigation' })}</Text>
        </View>
    );
};

const stylesheet = createStyleSheet({
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
