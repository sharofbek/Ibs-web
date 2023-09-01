import React from 'react';
import Navbar from "./Components/ANavbar/Navbar";
import './App.scss'
import Block from "./Components/Block_1/Block";
import Profession from "./Components/Profession/Profession";
import Course from "./Components/BlockCourse/Course";
import It from "./Components/ITBlock/IT";
import CheckJs from "./Components/CheckBlock/CheckJs";
import Platform from "./Components/Platform/Platform";
import CarouselWork from "./Components/AsistantCarousel/Carousel";
const App = () => {
    return (
        <div>
          <Navbar/>
          <Block/>
          <Profession/>
          <Course/>
          <It/>
          <CheckJs/>
          <Platform/>
          <CarouselWork/>
        </div>
    );
};

export default App;