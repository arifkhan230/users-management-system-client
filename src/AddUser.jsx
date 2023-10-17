import { Link } from "react-router-dom";


const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user)

        // sending user to server
        fetch('https://users-management-system-server-ovqjehnhq-arif-khans-projects.vercel.app/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="mt-10 max-w-7xl border-2 mx-auto p-10">
            <Link
                className="btn btn-outline"
                to="/allUser">All user
            </Link>
            <div className=" p-20">
                <h2 className=" text-xl text-center font-bold"> New user</h2>
                <form onSubmit={handleAddUser}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered rounded-none" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered rounded-none" />
                    </div>
                    <div className="">
                        {/* gender */}
                        <div className="flex items-center gap-8 mt-6">
                            <label className="label">
                                <span className="label-text text-lg">Gender</span>
                            </label>
                            <div className="flex items-center gap-8 ">
                                <div className="flex">
                                    <input type="checkbox" name="male" id="" />
                                    <span className="label-text ml-2"> Male</span>
                                </div>
                                <div className="flex">
                                    <input type="checkbox" name="female" id="" />
                                    <span className="label-text ml-2"> FeMale</span>
                                </div>
                            </div>
                        </div>
                        {/* status */}
                        <div className="flex items-center gap-8 mt-6">
                            <label className="label">
                                <span className="label-text text-lg">Status</span>
                            </label>
                            <div className="flex items-center gap-8 ">
                                <div className="flex">
                                    <input type="checkbox" name="active" id="" />
                                    <span className="label-text ml-2">Active</span>
                                </div>
                                <div className="flex">
                                    <input type="checkbox" name="inactive" id="" />
                                    <span className="label-text ml-2"> inactive</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="btn w-full bg-green-400 font-medium" type="submit">Save</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddUser;