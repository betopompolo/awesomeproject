export interface TextToken {
  type: 'text';
  content: string;
}
export interface BoldToken {
  type: 'bold';
  content: string;
}
export interface ItalicToken {
  type: 'italic';
  content: string;
}
export interface LinkToken {
  type: 'link';
  url: string;
  content: string;
}

export type Token = TextToken | BoldToken | ItalicToken | LinkToken;

export interface Tokenizer {
  mapInline: (markdown: string) => Token[];
}
