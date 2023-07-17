import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';
import AnimatedBackground from './components/organisms/AnimatedBackground';
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
          <Route exact path="/technologies" component={PageTechnologies} />
          <Route exact path="/portfolio" component={PagePortfolio} />
          <Route exact path="/contact" component={PageContact} />
        </Switch>
      </AnimatedBackground>
    </BrowserRouter>
  );
};

export default App;
