import React from "react";
import { Link } from "react-router-dom";
import { pathnames } from "./pathnames";
import logo from "../assets/images/Logo.png";
import { Divider } from "antd";

export default function Root() {
  return (
    <div className="flex flex-col w-full font-body text-white bg-brown h-full flex w-full">
      <Divider className="w-full mb-[5px]" style={{ borderColor: '#F0EADE' }} />
      <div className="flex w-full px-[150px] justify-between items-center ">
        <Link to={pathnames.HOME}>
          <img src={logo} className="w-[150px] justify-start" alt="" />
        </Link>
        <div className="flex gap-[40px] justify-end w-[80%]">
          <Link to={pathnames.HOME}> Home</Link>
          <Link to={pathnames.INTERIOR}> Interior</Link>
          <Link to={pathnames.EXTERIOR}> Exterior</Link>
          <Link to={pathnames.ABOUT_ME}> About Me</Link>
          <Link to={pathnames.CONTACT_ME}> Contact Me</Link>
        </div>
      </div>
      <Divider style={{ borderColor: '#F0EADE' }} className="w-full mt-[8px]" />
    </div>
  );
}