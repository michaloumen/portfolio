import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './screens/components/molecules/Navbar';
import AnimatedBackground from './screens/components/organisms/AnimatedBackground';
import PageAboutMe from './pages/about-me';
import PageHome from './pages/home';
import PageTechnologies from './pages/technologies';
import PagePortfolio from './pages/portfolio';
import PageContact from './pages/contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedBackground>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/aboutme" component={PageAboutMe} />
          <Route exact path="/technologies" component={PageTechnologies} />
          <Route exact path="/portfolio" component={PagePortfolio} />
          <Route exact path="/contact" component={PageContact} />
        </Switch>
      </AnimatedBackground>
    </BrowserRouter>
  );
};

export default App;
