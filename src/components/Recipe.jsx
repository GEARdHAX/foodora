import React, {useEffect, useState} from "react";
import {TailSpin} from "react-loader-spinner";
import {useNavigate, useParams} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = () => {
 const [instruction, setInstruction] = useState(null);
 const [like, setLike] = useState(false);
 const navigate = useNavigate();
 const {id} = useParams();

 // Fetch data from API
 const fetchData = async () => {
  try {
   const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=d6a195b32b3649efbf136b5465fb6889`
   );
    if (response.status === 402) {
      alert("Ohh-oh! Required Payment")
    //  navigate("/Feedback");
    }
   const data = await response.json();
   setInstruction(data);
  } catch (error) {
   console.error("Error fetching data:", error);
   return;
  }
 };
 const handleLike = () => {
  const itemExists = localStorage.getItem(id);

  if (itemExists) {
   localStorage.removeItem(id);
   setLike(false);
   toast.error("Removed from Food List");
  } else {
   localStorage.setItem(id, instruction.title);
   setLike(true);
   toast.success("Added to Food List");
  }
 };

 useEffect(() => {
  fetchData();
 }, [id]);

 // Return null or a loader while data is loading
 if (!instruction) {
  return (
   <div className="relative top-1/2 left-1/2" style={{translate: "-50% ,-50%"}}>
    <TailSpin color="rgb(255 240 220 / var(--tw-bg-opacity, 1))" />
   </div>
  );
 }

 return (
  <div>
   <ToastContainer
    position="bottom-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
   />
   <div className="flex w-full justify-between items-center flex-wrap ">
    <h1 className="text-3xl text-white font-lobster-brand m-3 cursor-pointer">
     Foodora
    </h1>
    <img
     onClick={() => handleLike()}
     className="w-8 h-8 mr-5 cursor-pointer invert"
     src="../src/assets/heart.png"
     alt=""
    />
   </div>
   <h1 className="text-3xl text-center mt-10 font-Kaushan-Script text-white">
    {instruction.title || "Recipe Name"}
   </h1>
   <div className="flex justify-center m-5 items-center">
    <img
     className="w-10 rounded-lg mx-3"
     src={
      instruction.vegetarian
       ? "../src/assets/veg.png"
       : "../src/assets/non-veg.png"
     }
     alt={instruction.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
    />
    <p className="bg-white text-center border-2 border-body rounded-md p-1 font-Nunito font-bold">
     Servings: {instruction.servings || "N/A"}
    </p>
    <p className="mx-3 text-center bg-white border-2 border-body rounded-md p-1 font-Nunito font-bold">
     Time to Cook: {instruction.readyInMinutes || "N/A"} min
    </p>
   </div>
   <div className="flex mt-24 mb-10 justify-center mx-5 items-center max-md:flex-col">
    <img
     src={instruction.image || "../src/assets/placeholder.png"}
     alt={instruction.title || "Recipe Image"}
     className="w-96 h-70 rounded-lg max-md:w-auto"
    />
    <div className="flex justify-center flex-col mx-5 m-10 text-black font-Nunito">
     <h2 className="text-xl font-bold">Ingredients:</h2>
     <ul>
      {instruction.extendedIngredients
       ? instruction.extendedIngredients.map((ingredient) => (
          <li className="list-disc m-2" key={ingredient.id}>
           {ingredient.original}
          </li>
         ))
       : "No ingredients available"}
     </ul>

     <h2 className="text-xl font-bold mt-5">Instructions:</h2>
     {instruction.analyzedInstructions ? (
      <ol>
       {instruction.analyzedInstructions[0].steps.map((step, index) => (
        <li key={index}>{step.step}</li>
       ))}
      </ol>
     ) : (
      <p>No instructions available for this recipe.</p>
     )}
     <a
      className="text-2xl font-Nunito text-center p-4 border-2 border-header my-8 rounded-full hover:bg-navbar-light transition-all"
      target="_blank"
      href={instruction.sourceUrl}
     >
      <h1>Source</h1>
     </a>
    </div>
   </div>
  </div>
 );
};

export default Recipe;
