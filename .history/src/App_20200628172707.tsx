
import React from 'react'

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
  useLocation
} from "react-router-dom";
import Batch from 'Batch';
import Level from 'Level';
import Credits from 'Credits';
import Button from 'Button';
import { releaseDays, startDate } from 'levelData';
import YouTube from 'react-youtube';
import About from 'About';
import Teaser from 'Teaser';

import FullStory from 'react-fullstory';
 
const FS_ORG_ID = 'W54CA'; // Fill this in here
const FS_NAMESPACE = 'FullStory'; // Fill this in here

const Welcome = importMDX.sync('./data/Welcome.mdx')

const BackButton = () => {
  const { batchNumber, order } = useParams()
  if(releaseDays[0].getTime() > Date.now()) return <Button icon="arrow-left-inverted" iconPosition="left" to={`/`} inverted={true}>Back to Teaser</Button>

  if (typeof batchNumber === 'string' && typeof order === 'string')
    return <Button icon="arrow-left-inverted" iconPosition="left" to={`/levels/${batchNumber}`} inverted={true}>Back to {new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(releaseDays[Number(batchNumber) - 1])}</Button>
  else if (typeof batchNumber === 'string')
    return <Button icon="arrow-left-inverted" iconPosition="left" to="/levels" inverted={true}>Back to Weeks</Button>
  return <Button icon="arrow-left-inverted" iconPosition="left" to="/" inverted={true}>Back to Welcome</Button>
}

const weekTrailers = [
  "iY6Qj6L_oF0"
]
const WeekTrailer = () => {
  const { batchNumber } = useParams()
  const weekTrailer = weekTrailers[Number(batchNumber)-1]
  return (<div className="youtubeFlexDisable">
    <YouTube
      containerClassName="youtubeContainer"
      videoId={weekTrailer || "iY6Qj6L_oF0"}
      opts={{ playerVars: { modestbranding: 1, rel: 0, loop: 1, listType: 'playlist' } }}
    />
  </div>)
}

function App() {
  const location = useLocation()
  const showAbout = (location.hash === '#!/about')
  const creditRoute = (
    <Route path="/credits">
      <header className="App-header">
        <div className="toolbar big">
          <Logo svg="logo_without_card" />
          <Button inverted={true} icon={'info-inverted'} to="#!/about">About</Button>
        </div>
        <BackButton />
      </header>
      <article className="App-body">
        <Credits />
      </article>
    </Route>
  )
  const routes = (startDate.getTime() >= Date.now()) ? (
    <Switch>
      {creditRoute}
      <Route path="/">
        <header className="App-header">
          <div className="toolbar small">
            <Logo small svg="logo_without_card" />
            <Button inverted={true} icon={'info-inverted'} to="#!/about">About</Button>
          </div>
        </header>
        <article className="App-body">
          <Teaser />
        </article>
      </Route>
    </Switch>
  ) : (
      <Switch>
        <Route path="/level/:batchNumber/:order">
          <header className="App-header">
            <div className="toolbar small">
              <Logo small svg="logo_without_card" />
              <Button inverted={true} icon={'info-inverted'} to="#!/about">About</Button>
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
              <Button inverted={true} icon={'info-inverted'} to="#!/about">About</Button>
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
              <Logo svg="logo_without_card" />
              <Button inverted={true} icon={'info-inverted'} to="#!/about">About</Button>
            </div>
            <BackButton />
          </header>
          <article className="App-body">
            <Batches />
          </article>
        </Route>
        {creditRoute}
        <Route path="/">
          <header className="App-header">
            <div className="toolbar big">
              <Logo />
              <Button inverted={true} icon={'info-inverted'} to="#!/about">About</Button>
            </div>
          </header>
          <article className="App-body">
            <Welcome />
          </article>
        </Route>
      </Switch>
    )
  return (
    <div className="App" style={showAbout ? { overflowY: 'hidden', maxHeight: '100vh' } : {}}>
      <FullStory org={ORG_ID} />
      <div className="ie-fixMinHeight">
        {routes}
        <About />
        <footer className="App-footer">
          <a href="https://discord.gg/yqdgu2Z" rel="noopener noreferrer" target="_BLANK">Discord</a>
          <a href="https://www.youtube.com/channel/UClayAs7TxVjMbzBLxBbqyoQ" rel="noopener noreferrer" target="_BLANK">Youtube</a>
          <Link to="/credits">Credits</Link>
        </footer>
      </div>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <div className="App-wrapper">
      <App />
    </div>
  </Router>
)

export default AppWrapper;
