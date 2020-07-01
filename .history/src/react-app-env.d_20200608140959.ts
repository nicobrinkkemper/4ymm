/// <reference types="react-scripts" />
declare module 'es6-object-assign'
declare module 'react-snapshot' {
    import * as ReactDOM from 'react-dom';
    var render: ReactDOM.Renderer;
  }