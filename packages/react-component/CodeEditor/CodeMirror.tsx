import { json } from '@codemirror/lang-json';
import { python } from '@codemirror/lang-python';
import CodeMirror, {
  Extension,
  ReactCodeMirrorProps
} from '@uiw/react-codemirror';
import React, { useMemo } from 'react';
import './CodeMirror.css';

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
`;

const extensionMap: Record<string, Extension> = {
  json: json(),
  python: python()
};

interface CodeParams extends ReactCodeMirrorProps {
  languages?: string[];
}

export const CodeMirrorEditor = ({
  value,
  theme = 'light',
  languages = ['python'],
  ...rest
}: CodeParams) => {
  const setExtension = useMemo(() => {
    return languages?.reduce((prev, language) => {
      if (!extensionMap[language]) return prev;
      return [...prev, extensionMap[language]];
    }, [] as Extension[]);
  }, [languages]);

  return (
    <CodeMirror
      height='200px'
      theme={theme}
      value={value || goLang}
      extensions={setExtension}
      {...rest}
    />
  );
};
