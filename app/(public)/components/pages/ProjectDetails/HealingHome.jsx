import HealingArea from "../../ProjectHealing/HealingArea";
import HealingArea2 from "../../ProjectHealing/HealingArea2";
import HealingArea3 from "../../ProjectHealing/HealingArea3";
import HealingArea4 from "../../ProjectHealing/HealingArea4";
import HealingArea5 from "../../ProjectHealing/HealingArea5";
import HealingBanner from "../../ProjectHealing/HealingBanner";
import HealingBannerImg from "../../ProjectHealing/HealingBannerImg";
import HealingFooter from "../../ProjectHealing/HealingFooter";
import Navbar from "../../Shared/Navbar/Navbar";



const HealingHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <HealingBanner />
            </div>
            <HealingBannerImg />
            <HealingArea />
            <HealingArea2 />
            <HealingArea3 />
            <HealingArea4 />
            <HealingArea5 />
            <HealingFooter />
        </div>
    );
};

export default HealingHome;