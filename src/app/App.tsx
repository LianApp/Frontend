import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Lesson from '../pages/lesson/Presentation';
import Lessons from '../pages/Lessons';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/lessons/1/pres" element={<Lesson />} />
    </Routes>
  );
}

export default App;
