import SimpleMarkdown from 'simple-markdown';
import {TextToken, Token, Tokenizer} from './token.model';

export class SimpleMarkdownTokenizer implements Tokenizer {
  mapInline(markdown: string): Token[] {
    const nodes = SimpleMarkdown.defaultInlineParse(markdown);
    const tokens = nodes.reduce<Token[]>((acc, node) => {
      const token = this.mapNode(node);
      if (token) {
        acc.push(token);
      }

      return acc;
    }, []);

    return tokens;
  }

  mapNode(node: SimpleNode): Token | null {
    const firstTextSubNode = this.findFirstTextToken(node.content);

    switch (node.type) {
      case 'text':
        return {
          type: 'text',
          content: node.content,
        };
      case 'strong':
        return {
          type: 'bold',
          content: firstTextSubNode?.content ?? '',
        };
      case 'em':
        return {
          type: 'italic',
          content: firstTextSubNode?.content ?? '',
        };
      case 'link':
        return {
          type: 'link',
          content: firstTextSubNode?.content ?? '',
          url: node.target,
        };
      default:
        return null;
    }
  }

  findFirstTextToken(nodes: SimpleNode[]): TextToken | null {
    if (!Array.isArray(nodes)) {
      return null;
    }

    const textNode = nodes.find(
      (subNode: SimpleNode) => subNode.type === 'text',
    );
    if (!textNode) {
      return null;
    }

    return {
      type: 'text',
      content: textNode.content,
    };
  }
}

type SimpleNode = SimpleMarkdown.SingleASTNode;
