import React from 'react';
import Slider from "../../components/slide";
import ProductItem from "../../components/ProductItem";
function Filter(props) {
    return (
        <div className="bg-gray-400">
            <div>
                <Slider />
            </div>
            <div className="mx-10 mt-10 grid grid-cols-12 gap-4">
                <div className="w-full h-auto bg-yellow-500 col-span-3">

                </div>
                <div className="w-full h-auto bg-red-500 col-span-9">
                    <div className="grid grid-cols-4 gap-4">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                    <div className="flex justify-center my-10">
                        xem thêm
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Filter;