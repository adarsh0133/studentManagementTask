import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStudent = ({total,newStudent}) => {
    let navigate = useNavigate();
    const [formData, setformData] = useState({
        name: '',
        email: '',
        course: '',
    });

    const handleChange = (e) => {
        setformData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.course || !formData.email || !formData.name) return alert("all fields required..")
        let newData = {
            ...formData,id:total+1
        }
        newStudent(newData)
        navigate('/')
    }

    return (
        <>
            <div className="container-fluid pt-4">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <fieldset className='border p-4 rounded'>
                            <legend className='float-none w-auto fw-bold text-primary px-2'>Add Student</legend>
                            <form onSubmit={handleSubmit} className='form-control py-4'>
                                <div className="mb-2">
                                    <input type="text" placeholder='Enter name' className='form-control' name='name' value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <input type="text" placeholder='Enter email' className='form-control' name='email' value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <input type="text" placeholder='Enter course' className='form-control' name='course' value={formData.course} onChange={handleChange} />
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

export default AddStudent