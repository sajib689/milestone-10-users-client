import { Link } from "react-router-dom";


const UserCard = ({ user,index,handleDelete }) => {
  const { _id, name, email, phone, location } = user;

 
  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <td className="p-3 flex">
        ({index + 1}). <p>{_id}</p>
      </td>
      <td className="p-3">
        <p>{name}</p>
      </td>
      <td className="p-3">
        <p className="dark:text-gray-600">{email}</p>
      </td>
      <td className="p-3">
        <p className="dark:text-gray-600">{phone}</p>
      </td>
      <td className="p-3">
        <p>{location}</p>
      </td>
      <td className="p-3">
        <span className="flex justify-center items-center font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
          <button className="btn text-white btn-primary" onClick={() => handleDelete(_id)}>Delete</button>
          <Link className="btn text-white ms-2 btn-warning mt-1" to={`/update/${_id}`}>Update</Link>
        </span>
      </td>
    </tr>
  );
};

export default UserCard;
