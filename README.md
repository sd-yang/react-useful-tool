# REACT 常用工具库

## 项目规范化配置

- prettier husky
- commitlint
- eslint

```nodejs
// Eslint

npm i eslint -D
npx eslint --init

// prettier
// 在.eslintrc 中,extend中添加 "prettier" 解决 eslint 和 prettier 的冲突

npm i prettier eslint-config-prettier eslint-plugin-prettier -D

echo module.exports={semi:false,singleQuote:true,printWidth:80,trailingComma:'none',bracketSpacing:true,arrowParens:'avoid',requirePragma:false,proseWrap:'preserve',endOfLine:'lf'}> .prettierrc.js

// 直接执行下面这句会装husky和lint-staged并配置

npx mrm@2 lint-staged

// commitlint

npm install -D @commitlint/cli @commitlint/config-conventional

echo module.exports = {extends: ['@commitlint/config-conventional']} > commitlint.config.js

npx husky add .husky/commit-msg "npx commitlint -e"

```

- jest 配置

```
npm install -D jest @jest/types

jest --init

npm install --save-dev @testing-library/react @testing-library/jest-dom

npm install --save-dev @testing-library/react-hooks

// jest.config.js

import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  bail: true,
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transformIgnorePatterns: ['/node_modules/'],
  preset: 'ts-jest',
}

module.exports = config



```

## 总结项目中常用到的方法和自定义 hooks，以及通用的组件

### Hooks

- useMount

### Utils
