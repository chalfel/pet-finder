import React from 'react';
import './global.css'
import Routes from './routes';
import { PetsProvider } from './contexts/Pets'

function App() {
  return (
    <PetsProvider>
      <Routes />
    </PetsProvider>
  );
}

export default App;
