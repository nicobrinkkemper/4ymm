/// <reference types="react-scripts" />
declare module 'react-snapshot' {
    import * as ReactDOM from 'react-dom';
    let render: ReactDOM.Renderer;
  }
declare module './data/4YMM Info Sheet - Sheet1.csv' {
  
}
declare module 'mdx.macro' {
  import {importMDX} from 'mdx.macro'
  let importMDX: any;
  let mdx: any;
}
declare module '@mdx-js/react' {
  import * as React from 'react'
  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'delete'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul'
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{children: React.ReactNode}>
  }
  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}