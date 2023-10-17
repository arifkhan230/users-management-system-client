import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllUsers = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = _id => {
        console.log(_id)
        console.log('delete kormu ne agey command dew valay')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingUser = users.filter(user => user._id !== _id)
                            setUsers(remainingUser)

                        }

                    })

            }
        })
    }


    return (
        <div className="max-w-7xl mx-auto mt-10 border-2 p-20">
            <h2 className="text-3xl text-center">All Users</h2>
            <Link
                to="/addUser">
                <button
                    className="btn btn-neutral">Add user
                </button>
            </Link>
            <div className=" mt-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                       <Link to={`/update/${user._id}`}> <button className="btn btn-neutral">Edit</button></Link>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn bg-amber-500 px-6">
                                                X
                                        </button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;