import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Favorite = () => {
 const [isChecked, setIsChecked] = useState(false); // Checkbox state
 const [recipes, setRecipes] = useState([]); // State to store fetched recipes
 const [ids, setIds] = useState([]); // State for stored IDs from localStorage

 // Handle Checkbox Change
 const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
 };

 // Fetch Recipes
 const fetchRecipes = () => {
  // Retrieve and parse IDs from localStorage
  const storedIds = Object.keys(localStorage);
  setIds(storedIds);

  if (storedIds.length === 0) {
   setRecipes([]); // Clear recipes if no stored IDs
   return;
  }

  const apiUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=d6a195b32b3649efbf136b5465fb6889&ids=${storedIds.join(
   ","
  )}`;

  fetch(apiUrl)
   .then((response) => {
    if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
   })
   .then((result) => {
    // Filter recipes for vegetarian mode if Veg-Mode is enabled
    const filteredRecipes = isChecked
     ? result.filter((recipe) => recipe.vegetarian)
     : result;
     console.log(filteredRecipes);
    setRecipes(filteredRecipes || []); // Update state with filtered recipes
   })
   .catch((error) => {
    console.error("Error fetching data:", error);
   });
 };

 // Fetch Recipes on Component Load and Checkbox Change
 useEffect(() => {
  fetchRecipes();
 }, [isChecked]);

 return (
  <div>
   <div className="flex w-full justify-between flex-wrap">
    <h1 className="text-3xl text-white font-lobster-brand m-3 cursor-pointer">
     Foodora
    </h1>
    <label className="cursor-pointer select-none">
     <div className="relative m-4">
      {/* Hidden Checkbox */}
      <input
       type="checkbox"
       checked={isChecked}
       onChange={handleCheckboxChange}
       className="sr-only"
      />
      {/* Track */}
      <div className="block h-7 w-16 rounded-full bg-[#E5E7EB]"></div>
      {/* Thumb */}
      <div
       className={`dot absolute top-1 h-5 w-5 rounded-full bg-[#F0BB78] transition-transform ${
        isChecked ? "translate-x-10" : "translate-x-1"
       }`}
      ></div>
      <h1 className="text-white font-Poppins mt-1 text-sm">Veg-Mode</h1>
     </div>
    </label>
   </div>
   <h1 className="text-4xl text-white font-lobster-brand my-10 text-center">
    My Favorites
   </h1>
   <div className="flex flex-wrap w-full justify-around my-24">
    {recipes.length > 0 ? (
     recipes.map((recipe) => (
      <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
       <div className="flex flex-col shadow-lg cursor-pointer mt-5">
        <img
         className="rounded-t-lg w-72 aspect-video object-fill"
         src={recipe.image}
         alt={recipe.title}
        />
        <div className="bg-white h-24 w-72 rounded-b-lg flex justify-center items-center text-center">
         <div className="title">
          <h1 className="text-base font-medium font-Poppins">{recipe.title}</h1>
          <h1 className="text-sm opacity-70">
           {recipe.vegetarian ? "Veg" : "Non-Veg"}
          </h1>
         </div>
        </div>
       </div>
      </Link>
     ))
    ) : (
     <h2 className="text-center text-white font-Kaushan-Script text-2xl my-10">
      {ids.length > 0
       ? `Yay! Found ${ids.length} items! 🎉`
       : "Uh-oh! No items yet. 😔"}
     </h2>
    )}
   </div>
  </div>
 );
};

export default Favorite;
