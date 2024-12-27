import React from "react";
import {NavLink} from "react-router-dom";

// Dynamically import your images
import homeIcon from "../assets/home.png";
import searchIcon from "../assets/search.png";
import heartIcon from "../assets/heart.png";
import feedbackIcon from "../assets/feedback.png";

const Sidebar_m = () => {
 const Menus = [
  {title: "Home", src: homeIcon, size: "size-6"},
  {title: "Search", src: searchIcon, gap: true, size: "size-6"},
  {title: "Favorite", src: heartIcon, gap: true, size: "size-6"},
  {title: "Feedback", src: feedbackIcon, gap: true, size: "size-7"},
 ];

 return (
  <div className="w-screen fixed bottom-0 bg-navbar-light md:hidden">
   <div className="flex h-16">
    <ul className="flex justify-around w-full items-center">
     {Menus.map((Menu, index) => (
      <li key={index} className="flex justify-center">
       <NavLink
        style={({isActive, isPending, isTransitioning}) => {
         return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black",
          viewTransitionName: isTransitioning ? "slide" : "",
         };
        }}
        className="flex items-center"
        to={Menu.title === "Home" ? "/" : `/${Menu.title}`}
       >
        <img
         src={Menu.src} // Use imported image src
         alt={Menu.title}
         className={`${Menu.size} mix-blend-darken`}
        />
       </NavLink>
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Sidebar_m;
