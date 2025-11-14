import React from 'react'
import { Link } from 'react-router-dom'

const AllStudents = ({ allStudents, onDelete }) => {
    return (
        <>
            <>
                <div className="container-fluid pt-3">
                    <div className="row">
                        <div className="col-12 col-lg-8 m-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">Delete</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allStudents.map((student) => (
                                        <tr key={student.id}>
                                            <th scope="row">{student.id}</th>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.course}</td>
                                            <td className='ps-3'><button onClick={() => { onDelete(student.id) }} className='btn btn-outline-danger bg-white p-1'>❌</button></td>
                                            <td className='ps-2'><Link to={`/update/${student.id}`} className='btn btn-outline-warning bg-white p-1'>✏️</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Link to='/add'>
                                <button className='btn btn-primary'>Add Student</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default AllStudents