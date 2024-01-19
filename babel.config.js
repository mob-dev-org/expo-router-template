module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['@babel/plugin-transform-flow-strip-types'],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-export-namespace-from'],
            ['react-native-reanimated/plugin'],
            'react-native-paper/babel',
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        '@src': './src',
                        '@api': './api',
                    },
                    extensions: [
                        '.js',
                        '.jsx',
                        '.ts',
                        '.tsx',
                        '.android.js',
                        '.android.tsx',
                        '.ios.js',
                        '.ios.tsx',
                        '.json',
                    ],
                },
            ],
        ],
    };
};
