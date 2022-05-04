import React from 'react';
import Slider from "react-slick";
import ProductItem from "./ProductItem";
function SlickSlider(props) {

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>
            <div className="container mx-10 w-auto">
                <Slider {...settings}>
                    {
                        [0,1,2,3,4,5].map((item,index)=>{
                            return(
                                <ProductItem />
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default SlickSlider;