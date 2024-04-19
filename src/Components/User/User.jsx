import { Link, useLoaderData } from "react-router-dom";
import UserCard from "./UserCard";
import Swal from "sweetalert2";
import { useState } from "react";
const User = () => {
  const usersAll = useLoaderData();
  const [users, setUsers] = useState(usersAll);

  const handleDelete = (_id) => {
    fetch(`https://milestone-10-users-server.vercel.app/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          const remaining = users.filter((user) => user?._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <Link
        to="/"
        className="mb-4 btn btn-success text-white text-2xl font-semibold leading-tight"
      >
        Back
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Id #</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Location</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserCard
                key={index}
                index={index}
                handleDelete={handleDelete}
                user={user}
              ></UserCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
