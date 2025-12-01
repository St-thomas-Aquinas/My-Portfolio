import React, { useState } from "react";
import { motion } from "framer-motion";

const menuItems = ["Home", "Projects", "About", "Contact"];

export default function SidebarMenu() {
  const [active, setActive] = useState("Home");

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 flex flex-col"
    >
      <h1 className="text-2xl font-bold mb-10">Maxwell Kuria Maina</h1>
      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => setActive(item)}
          className={`p-3 rounded-lg my-2 cursor-pointer hover:bg-gray-700 ${
            active === item ? "bg-gray-700" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </motion.div>
  );
}
