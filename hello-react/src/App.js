import React, { useState } from "react";
import Header from "./components/Header";
import Union from "./components/union";
import Group2 from "./components/group2";
import Eg115 from "./components/Eg115";
import Eg094 from "./components/Eg094";
import Eg075 from "./components/Eg075";
import Eg074 from "./components/Eg074";
import Eg022 from "./components/Eg022";
import Eg020 from "./components/Eg020";
import Eg012 from "./components/Eg012";
import Eg009 from "./components/Eg009";
import Solar from "./components/solar";


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 < slideComponents.length ? prevIndex + 4 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 >= 0 ? prevIndex - 4 : slideComponents.length - 4));
  };
  const slideComponents = [
    <Eg115 key="Eg115" />,
    <Eg094 key="Eg094" />,
    <Eg075 key="Eg075" />,
    <Eg074 key="Eg074" />,
    <Eg022 key="Eg022" />,
    <Eg020 key="Eg020" />,
    <Eg012 key="Eg012" />,
    <Eg009 key="Eg009" />,
  ];
 

  const visibleComponents = slideComponents.slice(currentIndex, currentIndex + 4);

  return (
    <div>
      <div className="flex justify-between">
        <div className="p-4">
         <Header/>
        </div>

        <div className="p-4 flex flex-wrap">
          <Union/>
          <Group2/>
        </div>
      </div>

      <div className="text-center text-2xl">Moissanite Engagement Rings</div>
      <br />

      <div className="flex flex-wrap overflow-auto md:overflow-scroll justify-center relative">
        <div className="w-full flex transition-transform ease-in-out duration-300 transform translate-x[-25%]">
          {visibleComponents.map((component, index) => (
            <React.Fragment key={index}>{component}</React.Fragment>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
          onClick={prevSlide}
        >
          {"<"}
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div> 
      
      <div class="flex justify-center">
      <br />
      <br />
      <br />

      <button>
      <Solar/>
      </button>
    </div>
    </div>

   
  );
}

export default App;