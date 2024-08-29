import React from "react";
import { Divider, Button } from "antd";
// import Root from "../routes/root";

export function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-start text-mustard px-[150px] custom-background">
      <div className="flex flex-col gap-[32px] lg:gap-[40px] text-white w-full lg:w-[50%]">

        <div className="flex flex-col gap-[24px]">
          <div className="w-full">
            <div className="w-[200px]">
              <Divider className="border-[5px] border-solid border-mustard mb-[5px]" />
            </div>
            <h1 className="text-white font-heading text-heading text-left">Natures’s Tiles</h1>
          </div>
          <p className="text-bodyMedium w-full lg:w-[75%]">
            From concept to completion, we are dedicated to transforming your spaces into stunning works of art. Let us create something extraordinary, one tile at a time
          </p>
        </div>

        <div className="flex flex-col">
          <Button className="text-white bg-mustard border-[0px] w-[150px] rounded-[1px] text-[1.8rem] font-heading px-[8.0rem] py-[1.5rem] ">Explore</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero;