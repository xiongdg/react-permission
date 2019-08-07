// lint-staged configuration

module.exports = {
    'src/**/*.{js,jsx,ts,tsx}': () => {
        return ['yarn prettier:fix', 'yarn lint:fix', 'git add'];
    },
    '*.lock': ['git rm --cahced'],
};
