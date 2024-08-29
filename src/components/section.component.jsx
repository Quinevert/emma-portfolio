import { Divider, Button } from "antd";
import React from "react";
// import Root from "../routes/root";

export function SectionComponent(image, heading, title, body, buttonText, flexDirection) {
  return (
    <div className="flex flex-col">
      <div>
        <h2>{heading}</h2>
        <Divider className="border-[5px] border-solid border-bron mb-[5px]" />
      </div>
      <div style={{ display: 'flex', flexDirection: { flexDirection }, gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h3>
            {title}
          </h3>
          <p>
            {body}
          </p>
          <div className="flex flex-col">
            <Button className="text-white bg-mustard border-[0px] w-[150px] rounded-[1px] text-[1.8rem] font-heading px-[8.0rem] py-[1.5rem] ">Explore</Button>
          </div>
        </div>
        <div>
          <img src={image} alt="hero-image" />
        </div>
      </div>
      <div className="w-full custom-background">
        {/* <h1 className="text-white text-4xl font-bold text-center pt-40">Welcome to My Website</h1> */}
        {/* <img src={herobg} alt="" /> */}
      </div>
    </div>
  )
}

export default SectionComponent;