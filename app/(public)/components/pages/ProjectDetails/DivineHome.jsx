import DivineArea from "../../ProjectDivine/DivineArea";
import DivineArea2 from "../../ProjectDivine/DivineArea2";
import DivineArea3 from "../../ProjectDivine/DivineArea3";
import DivineArea4 from "../../ProjectDivine/DivineArea4";
import DivineArea5 from "../../ProjectDivine/DivineArea5";
import DivineBanner from "../../ProjectDivine/DivineBanner";
import DivineBannerImg from "../../ProjectDivine/DivineBannerImg";
import Navbar from "../../Shared/Navbar/Navbar";


const DivineHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <DivineBanner />
            </div>
            <DivineBannerImg />
            <DivineArea />
            <DivineArea2 />
            <DivineArea3 />
            <DivineArea4 />
            <DivineArea5 />
        </div>
    );
};

export default DivineHome;