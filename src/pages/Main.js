import React from 'react';
import Contact from '../components/Contact';
import Front from '../components/Front';

import { scroller } from "react-scroll";

const Main = () => {
    const scrollToSection = id => {
        scroller.scrollTo(id, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

    return (
        <>
            <Front scrollToSection={scrollToSection}/>
            <Contact />
        </>
    );
}

export default Main;