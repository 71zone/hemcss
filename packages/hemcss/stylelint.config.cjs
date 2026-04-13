module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // hemcss authoring rules
    'declaration-no-important': true,
    'custom-property-pattern': null, // we use --hem-* and --_size — allow both
    'selector-class-pattern': null,  // allow kebab-case and is-* state classes
    'no-descending-specificity': null,
    'selector-max-specificity': ['0,2,0', { ignoreSelectors: [':focus-visible', ':where(.*)'] }],
    'at-rule-no-unknown': [true, { ignoreAtRules: ['layer'] }],
    'comment-empty-line-before': null,
    'rule-empty-line-before': null,
  },
  ignoreFiles: ['dist/**/*', 'node_modules/**/*', 'test/fixtures/**/*'],
}
