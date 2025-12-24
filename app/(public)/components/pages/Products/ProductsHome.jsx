
import React from 'react';
import ProductsArea from './ProductsArea';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const ProductsHome = () => {
    return (
        <div className="bg-[#111] text-white ">
            <Navbar backgroundColor="#111" textColor="white"  />
            <div>
                <ProductsArea />
            </div>
            <Footer />
        </div>
    );
};

export default ProductsHome;
