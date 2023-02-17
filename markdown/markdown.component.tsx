import React, {useMemo} from 'react';
import {SimpleMarkdownTokenizer} from './simple-markdown-tokenizer';
import {Token, Tokenizer} from './token.model';

export interface MarkdownProps {
  markdown: string;
  renderBold: (text: string) => JSX.Element;
  renderItalic: (text: string) => JSX.Element;
  renderLink: (text: string, url: string) => JSX.Element;
}
export const Markdown: React.FC<MarkdownProps> = props => {
  const tokens: Token[] = useMemo(
    () => tokenizer.mapInline(props.markdown),
    [props.markdown],
  );

  return (
    <>
      {tokens.map((token, index) => {
        return (
          <React.Fragment key={`${token.type}-${index}`}>
            {token.type === 'link' &&
              props.renderLink(token.content, token.url)}
            {token.type === 'bold' && props.renderBold(token.content)}
            {token.type === 'italic' && props.renderItalic(token.content)}
            {token.type === 'text' && token.content}
          </React.Fragment>
        );
      })}
    </>
  );
};
const tokenizer: Tokenizer = new SimpleMarkdownTokenizer();
