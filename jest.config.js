const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 或者 'node'
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // 用于处理别名导入，根据你的项目配置调整
  },
  automock: false,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: false, // 关闭类型检查错误报告，如果你的测试代码也有类型错误
      },
    ],
  }
};
