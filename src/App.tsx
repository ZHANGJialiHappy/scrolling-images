import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import dog from "./assets/dog.png";
import cat from "./assets/cat.png";
import { useState } from "react";



function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="m-[200px]">
        <div className="mockup-phone fixed">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <h1 className="bold text-6xl"> Today</h1>
              <p className="bold self-start ml-5"> Amria <br />Williams</p>
              <div className="h-48"></div>
              <p className="self-start ml-5">Photo shooting with Eva Sophie</p>
              <p className="self-start ml-5 text-sm text-gray-400">Copenhagen,Denmark</p>
              <div className="bg-gray-400 self-stretch h-px mx-5 mt-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <motion.img
          className="w-72 h-72 ml-[230px] mt-[500px]"
          src={dog}
          initial={{ opacity: 0, x:500}}
          whileInView={{ opacity: 1, x:0}}
          transition={{duration:1}}     
        />
      </div>
      <div>
        <motion.img
          className="w-72 h-72 ml-[230px] mt-[500px]"
          src={dog}
          initial={{ opacity: 0, x:500}}
          whileInView={{ opacity: 1, x:0}}
          transition={{duration:1}}     
        />
      </div>
      <div>
        <motion.img
          className="w-72 h-72 ml-[230px] mt-[500px]"
          src={dog}
          initial={{ opacity: 0, x:500}}
          whileInView={{ opacity: 1, x:0}}
          transition={{duration:1}}     
        />
      </div>
      <div>
        <motion.img
          className="w-72 h-72 ml-[230px] mt-[500px]"
          src={dog}
          initial={{ opacity: 0, x:500}}
          whileInView={{ opacity: 1, x:0}}
          transition={{duration:1}}     
        />
      </div>
    </>

  )
}

export default App
