import React from 'react';
import Sheet from './components/Sheet';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-800 text-white p-2 flex items-center">
        <div className="text-xl font-bold">Sheets Clone</div>
      </header>
      <Sheet />
    </div>
  );
}

export default App;