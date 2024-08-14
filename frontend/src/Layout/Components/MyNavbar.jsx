import React from "react";
import { CgProfile } from "react-icons/cg";
import Dropdown from "react-bootstrap/Dropdown";

const MyNavbar = () => {
  return (
    <nav className="flex justify-between p-3 items-center bg-fadewhite">
      <div className="flex gap-5">
        <a className="font-[600] text-[2rem]">BeenaIT</a>

        <a>
          <p className="text-[1.8rem] text-gray font-[400]">
            Welcome, <span className="text-black font-[500]">John Doe</span>
          </p>
        </a>
      </div>

     <Dropdown>
        <Dropdown.Toggle
          as="a"
          id="dropdown-basic"
          className="p-0 m-0 flex items-center"
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <CgProfile size={30} className="cursor-pointer" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" className="hover:bg-sky-100">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="hover:bg-sky-100">Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default MyNavbar;
