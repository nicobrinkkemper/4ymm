
import React from 'react'

import './App.css';
import 'flag-icon-css'
import Logo from './Logo'
import Batches from './Batches'
import { importMDX } from 'mdx.macro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Batch from 'Batch';
import Level from 'Level';
import Button from 'Button';

const Welcome = importMDX.sync('./data/Welcome.mdx')

function App() {
  return (
    <Router>
      <div className="App">
        <div className="ie-fixMinHeight">
          <Switch>
            <Route path="/about">
              <header className="App-header">
                <Logo />
              </header>
              <article className="App-body">
                about
              </article>
            </Route>
            <Route path="/level/:order">
              <header className="App-header">
                <Logo svg="logo_without_card" />
              </header>
              <article className="App-body">
                <Level />
              </article>
            </Route>
            <Route path="/levels/:batchNumber">
              <header className="App-header">
                <Logo svg="logo_without_card" />
              </header>
              <article className="App-body">
                <Batch />
              </article>
            </Route>
            <Route path="/levels">
              <header className="App-header">
                <Logo svg="logo_without_card" />
                <Button icon="arrow-left" iconPosition="left" to="/" inverted={true}>Back to Welcome</Button>
              </header>
              <article className="App-body">
                <Batches />
              </article>
            </Route>
            <Route path="/">
              <header className="App-header">
                <Logo />
              </header>
              <article className="App-body">
                <Welcome />
              </article>
            </Route>
          </Switch>
          <footer className="App-footer">
            <Link to="https://discord.gg/yqdgu2Z" rel="noopener noreferrer" target="_BLANK">Discord</Link>
            <Link to="https://www.youtube.com/channel/UClayAs7TxVjMbzBLxBbqyoQ" rel="noopener noreferrer" target="_BLANK">Youtube</Link>
            <Link to="/credits">Credits</Link>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
