import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const categories = [
    { url: "quilts", name: "Quilts/Rajai" },
    { url: "blanket", name: "Dohar/Blanket" },
    { url: "table-lenin", name: "Table Lenin" },
    { url: "curtains", name: "Curtains" },
    { url: "cushion", name: "Cushion" },
    { url: "bedsheet", name: "Bedsheet" },
    { url: "diwan-set", name: "Diwan set" },
    { url: "towel-set", name: "Towel set" },
    { url: "napkins", name: "Napkins" },
    { url: "women-clothing", name: "Women Clothing" },
    { url: "men-clothing", name: "Men Clothing" },
  ];
  return (
    <div id="sidebar">
      <nav className="flex flex-col justify-around items-start">
        {categories.map((category) => (
          <NavLink
            className="text-base text-dark-slate-gray font-normal"
            to={`/store/${category.url}`}
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
