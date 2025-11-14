import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import AllStudents from './components/AllStudents'
import { Route, Routes } from 'react-router-dom'
import AddStudent from './components/AddStudent'
import UpdateStudent from './components/UpdateStudent'

const App = () => {
  let initialStudent = [{
    id: 1,
    name: 'adarsh',
    email: 'adarsh@gmail.com',
    course: 'reactjs'
  }]

  const getUsers = () => {
    const stored = localStorage.getItem('students');
    return stored ? JSON.parse(stored) : initialStudent;
  }

  const [allStudents, setAllStudents] = useState(getUsers());

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(allStudents))
  }, [allStudents]);

  const addStudent = (newStudent) => {
    setAllStudents((prev) => {
      return [...prev, newStudent]
    })
  }

  const handleDelete = (id) => {
    setAllStudents((prev)=>{
      return prev.filter((std)=> std.id != id);
    })
  }

  const handleEdit = (editStd) => {
    setAllStudents((prev)=>{
      return prev.map((std)=>std.id == editStd.id ? editStd : std)
    })
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllStudents allStudents={allStudents} onDelete={handleDelete}/>} />
        <Route path='/add' element={<AddStudent total={allStudents.length} newStudent={addStudent} />} />
        <Route path='/update/:id' element={<UpdateStudent allStudents={allStudents} onEdit={handleEdit}/>} />
      </Routes>
    </>
  )
}

export default App