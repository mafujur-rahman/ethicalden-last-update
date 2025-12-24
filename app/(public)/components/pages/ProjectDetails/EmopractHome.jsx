import EmopractArea from "../../ProjectEmopract/EmopractArea";
import EmopractArea2 from "../../ProjectEmopract/EmopractArea2";
import EmopractArea3 from "../../ProjectEmopract/EmopractArea3";
import EmopractArea4 from "../../ProjectEmopract/EmopractArea4";
import EmopractArea5 from "../../ProjectEmopract/EmopractArea5";
import EmopractBanner from "../../ProjectEmopract/EmopractBanner";
import EmopractBannerImg from "../../ProjectEmopract/EmopractBannerImg";
import EmopractFooter from "../../ProjectEmopract/EmopractFooter";
import Navbar from "../../Shared/Navbar/Navbar";


const EmopractHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <EmopractBanner />
            </div>
            <EmopractBannerImg />
            <EmopractArea />
            <EmopractArea2 />
            <EmopractArea3 />
            <EmopractArea4 />
            <EmopractArea5 />
            <EmopractFooter />
        </div>
    );
};

export default EmopractHome;