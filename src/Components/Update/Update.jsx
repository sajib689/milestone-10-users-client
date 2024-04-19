import { Link, useLoaderData } from "react-router-dom";


import Swal from 'sweetalert2'
const Update = () => {
    const loggedUser = useLoaderData()
    const { _id, name } = loggedUser;
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const location = form.location.value
        const email = form.email.value
        const phone = form.phone.value
        const user = {name,email, phone,location}
        fetch( `https://milestone-10-users-server-git-main-sajib689s-projects.vercel.app/users/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then( res => res.json())
        .then(data => {
            if(data){
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Update Success",
                showConfirmButton: false,
                timer: 1500
              });
            }
            form.reset()
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update now {name}!</h1>
            <Link to='/users' className="mt-3 btn btn-secondary">
              Users List
            </Link>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                name="location"
                  type="text"
                  placeholder="location"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Update;