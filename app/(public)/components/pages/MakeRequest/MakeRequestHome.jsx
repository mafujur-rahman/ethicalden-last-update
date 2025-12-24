// import Footer from '@/components/Shared/Footer/Footer';
// import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import MakeARequestArea from './MakeRequestArea';

const MakeRequestHome = () => {
    return (
        <div className="bg-[#111] text-white ">
            {/* <Navbar backgroundColor="#111" textColor="white"  /> */}
            <div>
                <MakeARequestArea />
            </div>
        </div>
    );
};

export default MakeRequestHome;
