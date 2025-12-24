import MrCafeArea from "../../ProjectMrCafe/MrCafeArea";
import MrCafeArea2 from "../../ProjectMrCafe/MrCafeArea2";
import MrCafeArea3 from "../../ProjectMrCafe/MrCafeArea3";
import MrCafeArea4 from "../../ProjectMrCafe/MrCafeArea4";
import MrCafeArea5 from "../../ProjectMrCafe/MrCafeArea5";
import MrCafeBanner from "../../ProjectMrCafe/MrCafeBanner";
import MrCafeBannerImg from "../../ProjectMrCafe/MrCafeBannerImg";
import MrCafeFooter from "../../ProjectMrCafe/MrCafeFooter";
import Navbar from "../../Shared/Navbar/Navbar";


const MrCafeHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <MrCafeBanner />
            </div>
            <MrCafeBannerImg />
            <MrCafeArea />
            <MrCafeArea2 />
            <MrCafeArea3 />
            <MrCafeArea4 />
            <MrCafeArea5 />
            <MrCafeFooter />
        </div>
    );
};

export default MrCafeHome;