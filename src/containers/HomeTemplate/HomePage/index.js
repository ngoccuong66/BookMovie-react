import React from "react";
import Carousel from "./../Carousel";
import ListMovie from "./../ListMovie";
import HomeApp from "./../HomeApp";
import Contact from './../Contact';
import New from './../New';
import CinemaBlock from './../Cinemablock'
export default function index() {
    return (
        <div>
            <Carousel />
            <ListMovie />
            {/* <CinemaBlock /> */}
            <New />
            <HomeApp />
            <Contact />
        </div>
    )
  
}
