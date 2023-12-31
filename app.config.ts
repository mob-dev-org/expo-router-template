// `@expo/config` is installed with the `expo` package
// ensuring the versioning is correct.
import { ExpoConfig, ConfigContext } from '@expo/config';
require('dotenv').config();
const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: IS_DEV ? '(Dev) ExporouterTemplate' : IS_PREVIEW ? '(Preview) ExporouterTemplate' : 'ExporouterTemplate',
    slug: 'expo-router-template',
    owner: 'mob_dev',
    scheme: 'expo-router-template',
    version: '1.0.0',
    orientation: 'portrait',
    // icon: `./src/assets/images/${IS_DEV ? 'development' : IS_PREVIEW ? 'development' : 'preview'}.png`,
    userInterfaceStyle: 'light',
    jsEngine: 'hermes',
    splash: {
        // image: `./src/assets/images/${
        //     IS_DEV ? 'splash_development' : IS_PREVIEW ? 'splash_development' : 'splash_preview'
        // }.png`,
        resizeMode: 'contain',
        backgroundColor: IS_DEV ? '#3835AF' : IS_PREVIEW ? '#3835AF' : '#fff',
    },
    updates: {
        fallbackToCacheTimeout: 5000,
        // url: "https://u.expo.dev/70c1824d-d538-475f-858c-7af762cf6807",
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.exporoutertemplate' + (IS_DEV ? '.dev' : IS_PREVIEW ? '.preview' : ''),
        infoPlist: {
            // UIBackgroundModes: ["audio"],
        },
    },
    android: {
        // adaptiveIcon: {
        //   foregroundImage: "./assets/adaptive-icon.png",
        //   backgroundColor: "#FFFFFF",
        // },
        package: 'com.exporoutertemplate' + (IS_DEV ? '.dev' : IS_PREVIEW ? '.preview' : ''),
        // permissions: [
        //   "RECORD_AUDIO",
        //   "WRITE_EXTERNAL_STORAGE",
        //   "READ_EXTERNAL_STORAGE",
        // ],
    },
    web: {
        favicon: './assets/favicon.png',
    },
    extra: {
        eas: {
            projectId: '96f6d8d3-4b80-4e46-ad52-774dab54009f',
        },
    },
    plugins: ['./plugins/disableForcedDarkModeAndroid.ts'],
});
