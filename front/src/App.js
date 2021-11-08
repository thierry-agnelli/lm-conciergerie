// Dépzendances
import { useState, useEffect, createContext } from 'react';
// Style
import './App.css';
// Components
import Header from './assets/components/Header/Header';
import Body from './assets/components/Body/Body';
import Footer from './assets/components/Footer/Footer';

export const AppContext = createContext("");

function App() {
  // Variables d'états
  const [language, setLanguage] = useState(navigator.language.split('-')[0]);
  
  // Méthodes
  const getLanguage = () => language;

  // Contexte
  const contextValue = {
    getLanguage,
    setLanguage
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div id="mainContainer">
        <Header />
        <Body />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
