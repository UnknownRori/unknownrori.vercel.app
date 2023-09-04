module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        '@nuxtjs/eslint-config-typescript',
        'plugin:vue/recommended',
        'prettier',
    ],
    plugins: ['vue'],
    rules: {
        'semi': [2, 'always'],
    },
    overrides: [
        {
            files: ['pages/**/*.vue'], // Apply to Vue files in the "pages" directory
            rules: {
                'vue/multi-word-component-names': 'off', // Disable the rule
            },
        },
    ],
};
