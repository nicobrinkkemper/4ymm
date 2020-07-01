
import React, { PropsWithChildren } from 'react'

import './App.css';
import Logo from './Logo'
import Batches from './Batches'
import { importMDX } from 'mdx.macro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  HashRouter
} from "react-router-dom";
import Batch from 'Batch';
import Level from 'Level';
import Button from 'Button';
import { releaseDays } from 'levelData';
import YouTube from 'react-youtube';

const Welcome = importMDX.sync('./data/Welcome.mdx')

const levelTrailers = [
  "iY6Qj6L_oF0"
]
const BackButton = () => {
  const { batchNumber, order } = useParams()
  if (typeof batchNumber === 'string' && typeof order === 'string')
    return <Button icon="arrow-left-inverted" iconPosition="left" to={`/levels/${batchNumber}`} inverted={true}>Back to {new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDays[Number(batchNumber) - 1])}</Button>
  else if (typeof batchNumber === 'string')
    return <Button icon="arrow-left-inverted" iconPosition="left" to="/levels" inverted={true}>Back to Weeks</Button>
  return <Button icon="arrow-left-inverted" iconPosition="left" to="/" inverted={true}>Back to Welcome</Button>
}

const WeekTrailer = () => {
  const { batchNumber } = useParams()
  return (<div className="youtubeFlexDisable">
    <YouTube
      containerClassName="youtubeContainer"
      videoId={"iY6Qj6L_oF0"}
      opts={{ playerVars: { modestbranding: 1, rel: 0, loop: 1, listType: 'playlist' } }}
    />
  </div>)
}

function App() {
  return (
    <HashRouter>
    <Router>
      <div className="App">
        <div className="ie-fixMinHeight">
          <Switch>

            <Route path="/level/:batchNumber/:order">
              <header className="App-header">
                <div className="toolbar small">
                  <Logo small svg="logo_without_card" />
                  <Button inverted={true} icon={'info-inverted'} to="#about">About</Button>
                </div>
                <BackButton />
              </header>
              <article className="App-body">
                <Level />
              </article>
            </Route>
            <Route path="/levels/:batchNumber">
              <header className="App-header">
                <div className="toolbar small">
                  <Logo small svg="logo_without_card" />
                  <Button inverted={true} icon={'info-inverted'} to="#about">About</Button>
                </div>
                <WeekTrailer />
                <BackButton />
              </header>
              <article className="App-body">
                <Batch />
              </article>
            </Route>
            <Route path="/levels">
              <header className="App-header">
                <div className="toolbar big">
                  <Logo  svg="logo_without_card" />
                  <Button inverted={true} icon={'info-inverted'} to="#about">About</Button>
                </div>
                <BackButton />
              </header>
              <article className="App-body">
                <Batches />
              </article>
            </Route>
            <Route path="/">
              <header className="App-header">
                <div className="toolbar big">
                  <Logo />
                  <Button inverted={true} icon={'info-inverted'} to="#about">About</Button>
                </div>
              </header>
              <article className="App-body">
                <Welcome />
              </article>
            </Route>
          </Switch>
            <Route path="/about">
                ABOUT
            </Route>
    </HashRouter>
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
