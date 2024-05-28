import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe }) {

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/recipes/${recipe.id}`
  );
  toast("Item deleted successfully!");
  };

  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price} $</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
      </td>
      <ToastContainer />
    </tr>
  );
}
