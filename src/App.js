import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Landing } from './screens';
import Navbar from './screens/components/molecules/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Landing />
    </BrowserRouter>
  );
}

export default App;
