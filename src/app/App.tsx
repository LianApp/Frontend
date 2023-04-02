import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Presentation from '../pages/lesson/Presentation';
import Lessons from '../pages/Lessons';
import Lecture from '../pages/lesson/Lecture';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/lessons/1/pres" element={<Presentation />} />
      <Route path="/lessons/1/lecture" element={<Lecture />} />
    </Routes>
  );
}

export default App;
