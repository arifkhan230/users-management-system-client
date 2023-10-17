import { useLoaderData } from "react-router-dom";


const UpdateUser = () => {
    const loadedUser = useLoaderData()
    const {_id,name,email} = loadedUser;

    const handleUpdateUser = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user)
        // send update req and get res

        fetch(`https://users-management-system-server-ovqjehnhq-arif-khans-projects.vercel.app/users/${_id}`,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount> 0){
                alert('modified successfully')
            }
        })
    }


    return (
        <div className="max-w-7xl mx-auto mt-12 border">
            <div className=" p-20">
                <h2 className=" text-xl text-center font-bold"> New user</h2>
                <form onSubmit={handleUpdateUser}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Your Name" className="input input-bordered rounded-none" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={email} placeholder="Your Email" className="input input-bordered rounded-none" />
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
                        <button className="btn w-full bg-green-400 font-medium" type="submit">Update</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateUser;