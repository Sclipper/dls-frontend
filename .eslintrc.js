module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    // 'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // "array-callback-return": "warn",
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'accessor-pairs': 'error',
    'react/prop-types': 0,
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    radix: 'off',
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    // "comma-dangle": [
    //   "error",
    //   "always-multiline"
    // ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'no-nested-ternary': 'off',
    'func-call-spacing': ['error', 'never'],
    // "generator-star-spacing": ["error", { "before": true, "after": true }],
    // "indent": [
    //   "error",
    //   2,
    //   {
    //     "SwitchCase": 1,
    //     "VariableDeclarator": 1,
    //     "outerIIFEBody": 1,
    //     "MemberExpression": 1,
    //     "FunctionDeclaration": { "parameters": 1, "body": 1 },
    //     "FunctionExpression": { "parameters": 1, "body": 1 },
    //     "CallExpression": { "arguments": 1 },
    //     "ArrayExpression": 1,
    //     "ObjectExpression": 1,
    //     "ImportDeclaration": 1,
    //     "flatTernaryExpressions": false,
    //     "ignoreComments": false
    //   }
    // ],
    'import/no-named-default': 'off',
    'react/jsx-props-no-spreading': 'off',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'lines-between-class-members': ['error', 'always'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    // 'no-mixed-operators': [
    //   'error',
    //   {
    //     groups: [
    //       ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
    //       ["&&", "||"],
    //       ["in", "instanceof"],,
    //     ],
    //     allowSamePrecedence: true,
    //   },
    // ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'no-negated-in-lhs': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: false,
      },
    ],
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'react/display-name': 0,
    'no-unsafe-negation': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        switches: 'never',
        classes: 'never',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prefer-promise-reject-errors': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'never'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': ['error', 'always'],
    // "space-before-function-paren": ["error", "always"],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['*package', '!', '/', ',', '='],
        },
        block: {
          balanced: true,
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          exceptions: ['*'],
        },
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': 'off',
    // "indent": ["error", 2, { "ignoredNodes": ["TemplateLiteral"] }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    'wrap-iife': [
      'error',
      'any',
      {
        functionPrototypeMethods: true,
      },
    ],
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],
  },
}
