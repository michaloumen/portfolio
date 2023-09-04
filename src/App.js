import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';
import PageHome from './pages/home';
import PageTechnologies from './pages/technologies';
import PagePortfolio from './pages/portfolio';
import PageContact from './pages/contact';
import LanguageProvider from './hooks/languageProvider';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = pageTitle;
  });

  const pageTitleMap = {
    '/': 'Michelle Portfolio',
    '/technologies': 'Technologies',
    '/portfolio': 'Portfolio',
    '/contact': 'Contact',
  };

  const getPageTitle = (path) => {
    return pageTitleMap[path] || 'Michelle Portfolio';
  };
};

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <PageTitleUpdater />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/technologies" element={<PageTechnologies />} />
          <Route path="/portfolio" element={<PagePortfolio />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
