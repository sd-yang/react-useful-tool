import { python } from '@codemirror/lang-python';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import React from 'react';

const goLang = `import banana
class Monkey:
    # Bananas the monkey can eat.
    capacity = 10
    def eat(self, n):
        """Make the monkey eat n bananas!"""
        self.capacity -= n * banana.size

    def feeding_frenzy(self):
        self.eat(9.25)
        return "Yum yum"

        1. 小屏幕用不用
        2. 筹备会 线下和司仪见见
        3. 人数 喜糖袋准备 250个
`;

interface CodeParams extends ReactCodeMirrorProps {}

export const CodeMirrorEditor = ({ theme = 'light', onChange }: CodeParams) => {
  return (
    <CodeMirror
      height='200px'
      theme={theme}
      value={goLang}
      onChange={onChange}
      extensions={[python()]}
    />
  );
};
