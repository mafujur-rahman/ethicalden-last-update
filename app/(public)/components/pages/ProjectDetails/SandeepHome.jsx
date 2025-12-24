import SandeepArea from "../../ProjectSandeep/SandeepArea";
import SandeepArea2 from "../../ProjectSandeep/SandeepArea2";
import SandeepArea3 from "../../ProjectSandeep/SandeepArea3";
import SandeepArea4 from "../../ProjectSandeep/SandeepArea4";
import SandeepArea5 from "../../ProjectSandeep/SandeepArea5";
import SandeepBanner from "../../ProjectSandeep/SandeepBanner";
import SandeepBannerImg from "../../ProjectSandeep/SandeepBannerImg";
import SandeepFooter from "../../ProjectSandeep/SandeepFooter";
import Navbar from "../../Shared/Navbar/Navbar";


const SandeepHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <SandeepBanner />
            </div>
            <SandeepBannerImg />
            <SandeepArea />
            <SandeepArea2 />
            <SandeepArea3 />
            <SandeepArea4 />
            <SandeepArea5 />
            <SandeepFooter />
        </div>
    );
};

export default SandeepHome;