import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
            <div className="container mx-10 w-auto">
                <Slider {...settings}>
                    {
                        [0,1,2,3,4,5].map((item,index)=>{
                            return(
                                <div >
                                    <h3 className="w-full h-72 bg-red-500">{index+1}</h3>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Slide;