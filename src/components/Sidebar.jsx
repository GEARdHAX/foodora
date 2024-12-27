import {useState} from "react";
import {NavLink} from "react-router-dom";

// Dynamically import your images
import brandIcon from "../assets/brand.png";
import homeIcon from "../assets/home.png";
import searchIcon from "../assets/search.png";
import heartIcon from "../assets/heart.png";
import feedbackIcon from "../assets/feedback.png";
import arrowIcon from "../assets/arrow.png";

const Sidebar = () => {
 const [open, setOpen] = useState(false);

 // Menus with dynamically assigned image imports
 const Menus = [
  {title: "Home", src: homeIcon, size: "size-6"},
  {title: "Search", src: searchIcon, gap: true, size: "size-6"},
  {title: "Favorite", src: heartIcon, gap: true, size: "size-6"},
  {title: "Feedback", src: feedbackIcon, gap: true, size: "size-7"},
 ];

 return (
  <div className="flex min-h-screen max-md:hidden mr-3">
   <div
    onMouseEnter={() => setOpen(!open)}
    onMouseLeave={() => setOpen(!open)}
    className={` ${
     open ? "w-52" : "w-16 "
    } bg-navbar-light min-h-screen p-5 pt-5 relative duration-300`}
   >
    <img
     src={arrowIcon}
     className={`shadow-2xl bg-white absolute cursor-pointer -right-3 top-9 w-6 border-dark-purple border-2 rounded-full ${
      open ? `rotate-180` : `rotate-0`
     } transition-all`}
     onClick={() => setOpen(!open)}
    />
    <div
     className={`brand relative -left-3 flex gap-x-4 items-center size-12 ${
      open && "rotate-[360deg] w-20 size-20 left-10"
     }`}
    >
     <NavLink to="/">
      <img
       title="Brand"
       src={brandIcon}
       className={`cursor-pointer  duration-500 ${open && "rotate-[360deg]"}`}
      />
     </NavLink>
    </div>
    <ul className="pt-6">
     {Menus.map((Menu, index) => (
      <li
       title={Menu.title}
       key={index}
       className={`flex cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
        Menu.gap ? "mt-9" : "mt-2"
       } ${index === 0 && "bg-light-white"}`}
      >
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
         className={`${Menu.size} mix-blend-darken`}
         src={Menu.src} // Use imported image src
         alt={Menu.title}
        />
        <span
         className={`${
          !open && "hidden"
         } origin-left duration-200 text-black font-Nunito relative left-8`}
        >
         {Menu.title}
        </span>
       </NavLink>
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Sidebar;
