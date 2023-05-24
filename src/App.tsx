import { motion } from "framer-motion";
import european from "./assets/european.jpeg";
import asien from "./assets/asien.jpeg";
import arabic from "./assets/arabic.jpeg";


function App() {

  return (
    <div className="mt-20 flex">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
          <h1 className="bold text-6xl"> Today</h1>
          <p className="bold self-start ml-5"> Amria <br/>Williams</p>
          <div className="h-48"></div>
          <p className="self-start ml-5">Photo shooting with Eva Sophie</p>
          <p className="self-start ml-5 text-sm text-gray-400">Copenhagen,Denmark</p>
          <div className="bg-gray-400 self-stretch h-px mx-5 mt-3"></div>
          </div>
        </div>
      </div>
      <motion.img
      className="w-72 h-72"
              src={european}
              animate={{ x:0, y:100, rotate:-360 }}
              transition={{ type: "spring" }}
            />
      <motion.img
        className="w-72 h-96"
        src={asien}
        animate={{ x:0, y:100, rotate:360 }}
        transition={{ type: "spring" }}
      />
      <motion.img
        className="w-72 h-72"
        src={arabic}
        animate={{ x:0, y:100, rotate:-360 }}
        transition={{ type: "spring" }}
      />
    </div>
  )
}

export default App
