import WonderliteArea from "../../ProjectWonderlite/WonderliteArea";
import WonderliteArea2 from "../../ProjectWonderlite/WonderliteArea2";
import WonderliteArea3 from "../../ProjectWonderlite/WonderliteArea3";
import WonderliteArea4 from "../../ProjectWonderlite/WonderliteArea4";
import WonderliteArea5 from "../../ProjectWonderlite/WonderliteArea5";
import WonderliteBanner from "../../ProjectWonderlite/WonderliteBanner";
import WonderliteBannerImg from "../../ProjectWonderlite/WonderliteBannerImg";
import WonderliteFooter from "../../ProjectWonderlite/WonderliteFooter";
import Navbar from "../../Shared/Navbar/Navbar";



const WonderliteHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <WonderliteBanner />
            </div>
            <WonderliteBannerImg />
            <WonderliteArea />
            <WonderliteArea2 />
            <WonderliteArea3 />
            <WonderliteArea4 />
            <WonderliteArea5 />
            <WonderliteFooter />
        </div>
    );
};

export default WonderliteHome;