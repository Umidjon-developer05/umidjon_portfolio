import React from "react";
import HeroContent from "./_components/HeroContent";

const Main = () => {
  return (
    <div className="relative flex flex-col h-full w-full " id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute   h-full w-full left-0  object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Main;
