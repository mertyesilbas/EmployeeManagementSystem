import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowLeftOnRectangleIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline/index.js";
const HeaderComponent = () => {
  return (
    <header className="fixed w-12 bg-white text-bright_black shadow-xl drop-shadow-2xl">
      <nav className="mx-auto flex h-screen flex-col items-center justify-between py-6">
        <div className="flex flex-col space-y-5">
          <NavLink
            to="/employees"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "headerlink bg-bright_bold text-white"
                : "headerlink"
            }
          >
            <UserGroupIcon className="h-8 w-8"></UserGroupIcon>
          </NavLink>
          <NavLink
            to="/departments"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "headerlink bg-bright_bold text-white"
                : "headerlink"
            }
          >
            <BuildingOfficeIcon className="h-8 w-8" />
          </NavLink>
        </div>

        <ArrowLeftOnRectangleIcon className="h-8 w-8" />
      </nav>
    </header>
  );
};

export default HeaderComponent;
