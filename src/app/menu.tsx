// components/Header.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Each } from "./Each";

const Header = () => {
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      label: "Services",
      subMenu: [
        { path: "/services/web-design", label: "Web Design" },
        { path: "/services/development", label: "Development" },
        { path: "/services/marketing", label: "Marketing" },
      ],
    },
  ];

  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/">
            <p className="text-white text-lg font-semibold">Your Logo</p>
          </Link>
        </div>
        <div className="space-x-4">
          <Each
            of={menuItems}
            render={(item, index) => <MenuItem key={index} item={item} />}
          />
        </div>
      </nav>
    </header>
  );
};

const MenuItem = ({ item }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleSubMenuToggle}
      onMouseLeave={handleSubMenuToggle}
    >
      <Link href={item.path || "#"}>
        <p className="text-white hover:text-gray-300 focus:outline-none">
          {item.label}
        </p>
      </Link>
      {item.subMenu && isSubMenuOpen && (
        <div className="absolute z-50 mt-0 space-y-2 bg-gray-800 text-white p-3">
          <Each
            of={item.subMenu}
            render={(subMenuItem, index) => (
              <Link key={index} href={subMenuItem.path}>
                <p className="block hover:text-gray-300">{subMenuItem.label}</p>
              </Link>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
