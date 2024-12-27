import React, {useState, useEffect} from "react";
import search from "../assets/search.png";
import {Link} from "react-router-dom";

const Home = () => {
  
 const [isChecked, setIsChecked] = useState(false); // Checkbox state
 const [recipes, setRecipes] = useState([]); // State to store fetched recipes
 const [searchInput, setSearchInput] = useState(""); // User input state
 const [query, setQuery] = useState(""); // Query for API

 // Function to fetch recipes based on the current query and checkbox state
 const fetchRecipes = () => {
  const diet = isChecked ? "vegetarian" : ""; // Diet filter
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=d6a195b32b3649efbf136b5465fb6889&query=${query}${
   diet ? `&diet=${diet}` : ""
  }`;

  fetch(apiUrl)
   .then((response) => {
    if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
   })
   .then((result) => {
    setRecipes(result.results || []); // Update state with recipes
   })
   .catch((error) => {
    console.error("Error fetching data:", error);
   });
 };

 // Handle checkbox change
 const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
 };

 // Handle search button click
 const handleSearch = () => {
  if (searchInput.trim() === "") {
   alert("Please enter a recipe name to search!");
   return;
  }
  setQuery(searchInput.trim()); // Update query to user's input
 };

 // Fetch recipes whenever the checkbox state or query changes
 useEffect(() => {
  fetchRecipes();
 }, [isChecked, query]);

 return (
  <>
   <div className="w-full flex flex-col flex-wrap">
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
    <div className="flex flex-col justify-center items-center">
     <h1 className="text-center font-Kaushan-Script text-white text-2xl">
      “Delicious Recipes, Just a Click Away!“
     </h1>
     <div className="flex space-x-4 mt-2 mb-10">
      <input
       autoFocus
       className="border-none p-3 outline-none rounded-lg mt-3 w-full md:w-72 font-Poppins text-sm shadow-lg"
       type="text"
       value={searchInput}
       onChange={(e) => setSearchInput(e.target.value)} // Update input state
       placeholder="Enter Recipe Name"
      />
      <button
       onClick={handleSearch}
       className="p-3 shadow-lg bg-white rounded-full mt-3 active:scale-75 transition-all"
      >
       <img className="w-5 mix-blend-multiply" src={search} alt="" />
      </button>
     </div>
    </div>
   </div>
   <div className="flex mt-14 mx-5 flex-col mb-10 min-h-screen">
    <h1 className="text-3xl font-Nunito font-bold mb-10">Popular Recipes</h1>
    {/* <Link> */}
    <div className="flex flex-wrap  w-full justify-around">
     {recipes.length > 0 ? (
      recipes.map((recipe) => (
       <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
        <div
         key={recipe.id}
         className="flex flex-col shadow-lg cursor-pointer mt-5"
        >
         <img
          className="rounded-t-lg w-72 aspect-video object-fill"
          src={recipe.image}
          alt={recipe.title}
         />
         <div className="bg-white h-24 w-72 rounded-b-lg flex justify-center items-center text-center">
          <div className="title">
           <h1 className="text-base font-medium font-Poppins">
            {recipe.title}
           </h1>
           <h1 className="text-sm opacity-70">
            {isChecked ? "Veg" : "Non-Veg"}
           </h1>
          </div>
          {/* </Link> */}
         </div>
        </div>
       </Link>
      ))
     ) : (
      <h2 className="text-center text-gray-500">No recipes found!</h2>
     )}
    </div>
   </div>
  </>
 );
};

export default Home;
