import React from 'react';
import { useRouter } from "next/dist/client/router";
function index(props) {

    const Router = useRouter();

    return (
        <div>
            đây là trang index
        </div>
    );
}

export default index;