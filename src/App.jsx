import {CSSTransition, SwitchTransition} from "react-transition-group";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
import Feedback from "./components/Feedback";
import Error from "./components/Error";
import Sidebar from "./components/Sidebar";
import Sidebar_m from "./components/Sidebar_m";
import "./components/header.css";
import "./components/transition.css"; // For custom CSS transitions
import Recipe from "./components/Recipe";

const App = () => {
 const location = useLocation(); // Get the current route

 return (
  <div className="curved">
   <div className="flex w-screen">
    <Sidebar />
    <Sidebar_m />

    {/* Main content area with transition */}
    <div className="flex flex-col w-full">
     <SwitchTransition>
      <CSSTransition
       key={location.pathname} // Triggers a new transition on route change
       classNames="fade" // Matches the CSS class name for transitions
       timeout={300} // Transition duration in milliseconds
      >
       <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Feedback" element={<Error />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="*" element={<Error />} />
       </Routes>
      </CSSTransition>
     </SwitchTransition>
    </div>
   </div>
  </div>
 );
};

export default App;
