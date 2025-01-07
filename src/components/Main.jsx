"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      // once: false,
    });
  }, []);
  return (
    <div
      data-aos="flip-left"
      className="bg-zinc-900 flex-grow py-10 grid items-center pr-7 rounded-bl-3xl rounded-tl-3xl"
    >
      {children}
    </div>
  );
};

export default Main;
