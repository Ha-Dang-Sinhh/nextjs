import React from 'react';

function ProductItem(props) {
    return (
        <div>
            <div>
                <img className=" w-full h-72 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65CXLkEWFDlHIHnU1hDnHHVn0GdfzBR7Ejg&usqp=CAU" alt="" />
                <div>
                    <h6>Sản phẩm nhà làm </h6>
                    <p>Công năng vượt trội thánh thức thời gian</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;