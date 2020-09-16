import React from "react";

import ResponsiveCarousel from '../Components/ResponsiveCarousel.jsx';

function FrontPage() {

  const carouselData = [
        {
          title: `Check out: Kitten Lady`,
          alt: `First Kitten`,
          link: 'http://www.kittenlady.org/',
          image: require('../Images/testkitten1.jpg')
        },
        {
          title: `Check out: TinyKittens`,
          alt: `Second Kitten`,
          link: 'http://www.tinykittens.com/',
          image: require('../Images/testkitten2.jpg')
        },
        {
          title: `Check out: The Critter Room`,
          alt: `Third Kitten`,
          link: 'https://purrfectpals.org/critterroom/',
          image: require('../Images/testkitten3.jpg')
        },
        {
          title: `Check out: Jackson Galaxy`,
          alt: `Fourth Kitten`,
          link: 'https://www.jacksongalaxy.com/',
          image: require('../Images/testkitten4.png')
        }
      ]


  return (
    <div className="page frontpage">
        <ResponsiveCarousel carouselData={carouselData}></ResponsiveCarousel>
    </div>
  );
}


export default FrontPage;
