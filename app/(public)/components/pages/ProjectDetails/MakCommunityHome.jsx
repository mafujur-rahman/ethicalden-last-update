import MakCommunityArea from "../../ProjectMakCommunity/MakCommunityArea";
import MakCommunityArea2 from "../../ProjectMakCommunity/MakCommunityArea2";
import MakCommunityArea3 from "../../ProjectMakCommunity/MakCommunityArea3";
import MakCommunityArea4 from "../../ProjectMakCommunity/MakCommunityArea4";
import MakCommunityArea5 from "../../ProjectMakCommunity/MakCommunityArea5";
import MakCommunityBanner from "../../ProjectMakCommunity/MakCommunityBanner";
import MakCommunityBannerImg from "../../ProjectMakCommunity/MakCommunityBannerImg";
import MakCommunityFooter from "../../ProjectMakCommunity/MakCommunityFooter";
import Navbar from "../../Shared/Navbar/Navbar";



const MakCommunityHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <MakCommunityBanner />
            </div>
            <MakCommunityBannerImg />
            <MakCommunityArea />
            <MakCommunityArea2 />
            <MakCommunityArea3 />
            <MakCommunityArea4 />
            <MakCommunityArea5 />
            <MakCommunityFooter />
        </div>
    );
};

export default MakCommunityHome;