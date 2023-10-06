import { NavLink } from "react-router-dom";

const MainMenu = () => {
  return (
   <div className="flex justify-between container font-Viga px-5">
     <h2 className="text-ORANGE">Pizza Boyz</h2>
    <ul className="flex gap-4">
      
    <NavLink to="/">
        <li className="">Home</li>
      </NavLink>
      <NavLink to="/bestellung">
        <li className="">Bestellung hinzufügen</li>
      </NavLink>
    </ul>
   </div>
  );
};

export default MainMenu;
