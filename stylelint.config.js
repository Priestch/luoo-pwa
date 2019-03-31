module.exports = {
  root: true,
  extends: ['stylelint-config-standard'],
  rules: {
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
