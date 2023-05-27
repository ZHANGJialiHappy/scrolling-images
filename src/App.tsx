import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dog from "./assets/dog.png";

function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "start start"]
  });

  const imageValue = useTransform(scrollYProgress, [0, 1], ['-200%', '0%']);

  const { scrollY } = useScroll();

  const rotate = useTransform(
    scrollY,
    [0, 292],
    [0, 360],
    { clamp: false }
  );

  return (
    <div className="relative h-[1000px] w-[1080px]" ref={containerRef}>
      <div className="ml-[350px] pt-20 text-3xl">please scroll</div>
      <div className="fixed mt-2 ml-[250px]">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <h1 className="bold text-6xl"> Today</h1>
              <div className="h-80">
              </div>
              <p className="self-start ml-5">Photo shooting with Eva Sophie</p>
              <p className="self-start ml-5 text-sm text-gray-400">Copenhagen,Denmark</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-72 left-[800px]">
        <motion.div style={{ translateX: imageValue, rotate: rotate }}>
          <img className="w-[250px]" src={dog} alt="a dog" />
        </motion.div>
      </div>
    </div>
  );
}

export default App