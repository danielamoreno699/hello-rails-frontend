import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Message from './components/messages';

function App() {
  return (

    <div>
      <h1>react app</h1>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
