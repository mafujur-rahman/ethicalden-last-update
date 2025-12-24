import LaljhalArea from "../../Project-Laljhal/LaljhalArea";
import LaljhalArea2 from "../../Project-Laljhal/LaljhalArea2";
import LaljhalArea3 from "../../Project-Laljhal/LaljhalArea3";
import LaljhalArea4 from "../../Project-Laljhal/LaljhalArea4";
import LaljhalArea5 from "../../Project-Laljhal/LaljhalArea5";
import LaljhalBanner from "../../Project-Laljhal/LaljhalBanner";
import LaljhalBannerImg from "../../Project-Laljhal/LaljhalBannerImg";
import Navbar from "../../Shared/Navbar/Navbar";



const LaljhalHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <LaljhalBanner />
            </div>
            <LaljhalBannerImg />
            <LaljhalArea />
            <LaljhalArea2 />
            <LaljhalArea3 />
            <LaljhalArea4 />
            <LaljhalArea5 />
        </div>
    );
};

export default LaljhalHome;