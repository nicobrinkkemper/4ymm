/// <reference types="react-scripts" />
declare module 'react-snapshot' {
    import * as ReactDOM from 'react-dom';
    var render: ReactDOM.Renderer;
  }

declare module 'mdx.macro' {
  import {importMDX} from 'mdx.macro'
  var importMDX: ReactDOM.Renderer;
}