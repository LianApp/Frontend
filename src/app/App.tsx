import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LessonsPage from '../pages/LessonsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/lessons" element={<LessonsPage />} />
    </Routes>
  );
}

export default App;
