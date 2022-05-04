import React from "react";
import Slider from "../components/slide";
import SlickSlider from "../components/SlickSlider";
import ProductItem from "../components/ProductItem";

const Index = () => {

  

  return (
    <div className=" bg-gray-400 ">
      <div className=" w-auto mx-10 ">
        <div>
          <Slider></Slider>
        </div>
        <div className="mt-10">
          <SlickSlider></SlickSlider>
        </div>
        <div className="h-full mt-10">
          <div className="h-full grid grid-cols-3 gap-4">
            <div className=""><ProductItem /></div>
            <div className=""><ProductItem /></div>
            <div className=""><ProductItem /></div>
            <div className="col-span-2 "><ProductItem /></div>
            <div className=""><ProductItem /></div>
            <div className=""><ProductItem /></div>
            <div className="col-span-2 "><ProductItem /></div>
          </div>
        </div>
        <div className="h-full grid grid-cols-3 gap-36">
          <div className="">
            <ProductItem />
          </div>
          <div className="">
            <ProductItem />
          </div>
          <div className="">
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  // ctx.store.dispatch(getHomeBanner(5));
  // ctx.store.dispatch(getHomePropose(3));
  // ctx.store.dispatch(getHomeProduct(8));
  // ctx.store.dispatch(getHomeArticle(3));
};

export default Index;
