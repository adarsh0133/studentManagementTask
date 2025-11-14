import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStudent = ({ allStudents,onEdit }) => {
  let { id } = useParams();
  let editStd = allStudents.find((std) => std.id == id);
  const [editStudent, setEditStudent] = useState(editStd);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setEditStudent((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!editStudent.name || !editStudent.email || !editStudent.course) return alert("fields can not be empty")
    onEdit(editStudent)
    navigate('/')
  }
  return (
    <>
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <fieldset className='border p-4 rounded'>
              <legend className='float-none w-auto fw-bold text-primary px-2'>Edit - {editStd.name}</legend>
              <form onSubmit={handleSubmit} className='form-control py-4'>
                <div className="mb-2">
                  <input type="text" placeholder='Enter name' className='form-control' name='name' value={editStudent.name} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder='Enter email' className='form-control' name='email' value={editStudent.email} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder='Enter course' className='form-control' name='course' value={editStudent.course} onChange={handleChange} />
                </div>
                <input type="submit" className='btn btn-primary' />
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateStudent