import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from 'pages/Main';
import Presentation from 'pages/lesson/Presentation';
import Lessons from 'pages/Lessons';
import Lecture from 'pages/lesson/Lecture';
import Test from 'pages/lesson/Test';
import Login from 'features/authentication/Login/ui/Login';
import ProtectedRoute from 'features/authentication/ProtectedRoute/ProtectedRoute';
import { Role } from 'entities/user/model/user.model';
import TeacherPage from 'pages/Teacher/TeacherPage';
import AddLessonPage from 'pages/Teacher/AddLessonPage';
import LessonsForCourse from 'pages/Teacher/LessonsForCourse';
import StudentsList from 'features/StudentsList/StudentsList';
import AddLessonForm from 'features/AddLessonForm/AddLessonForm';
import LessonsCourse from 'pages/LessonsCourse';
import CoursesSubject from 'pages/Teacher/CoursesSubject';
import Dashboard from 'pages/Dashboard';
import Groups from 'pages/Teacher/Groups';
import Courses from 'pages/Teacher/Courses';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route element={<ProtectedRoute allowedRoles={[Role.STUDENT]} />}>
          <Route path="/" element={<Main />} />          
          <Route path="/lessons" element={<Lessons />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[Role.STUDENT, Role.TEACHER]}/> } >
          <Route path="/course" element={<LessonsCourse />} />
          <Route path="/lessons/1/pres" element={<Presentation />} />
          <Route path="/lessons/1/lecture" element={<Lecture />} />
          <Route path="/lessons/1/test" element={<Test />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[Role.TEACHER]}/>}>
          <Route path='/teacher' element={<TeacherPage />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/teacher/courses' element={<Courses />} />
          <Route path='/teacher/course/lessons' element={<LessonsForCourse />}/>
          <Route path='/add-lesson' element={<AddLessonPage />}/>
          <Route path='/students/list' element={<StudentsList />}/>
          <Route path='/add-lesson/form' element={<AddLessonForm />}/>
          <Route path='/subjects/course' element={<CoursesSubject />}/>
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[Role.ORGANIZATOR]} />}>
          <Route path="/dashboard" element={<Dashboard />} />          
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
