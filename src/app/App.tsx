/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from '../pages/Main';
import Presentation from '../pages/lesson/Presentation';
import Lessons from '../pages/Lessons';
import Lecture from '../pages/lesson/Lecture';
import Test from '../pages/lesson/Test';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Main />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/1/pres" element={<Presentation />} />
        <Route path="/lessons/1/lecture" element={<Lecture />} />
        <Route path="/lessons/1/test" element={<Test />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
