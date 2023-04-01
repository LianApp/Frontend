import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LessonsPage from '../pages/LessonsPage';
import LessonPage from '../pages/LessonPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/lessons" element={<LessonsPage />} />
      <Route path="/lessons/1/pres" element={<LessonPage />} />
    </Routes>
  );
}

export default App;
