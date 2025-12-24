import React from 'react';
import SignInArea from './SignInArea';
// import SignInArea from './SignInArea';
// import Navbar from '@/components/Shared/Navbar/Navbar';

const SignInHome = () => {
    return (
        <div className="bg-[#111] text-white ">
            {/* <Navbar backgroundColor="#111" textColor="white"  /> */}
            <div>
                <SignInArea />
            </div>
        </div>
    );
};

export default SignInHome;