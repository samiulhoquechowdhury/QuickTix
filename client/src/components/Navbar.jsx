import { TicketIcon } from "lucide-react";
import React from "react";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img className="w-[30px]" src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
