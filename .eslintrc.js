// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    // 语句强制分号结尾
    'semi': [2, 'always'],
    // 引号类型 `` "" ''
    'quotes': [1, 'single'],
    // 强制驼峰法命名
    'camelcase': 1,
    // 缩进风格
    'indent': [2, 4, { 'SwitchCase': 1 }],
    'unicode-bom': 0
    }
}
