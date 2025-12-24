import MassArtArea from "../../ProjectMassArt/MassArtArea";
import MassArtArea2 from "../../ProjectMassArt/MassArtArea2";
import MassArtArea3 from "../../ProjectMassArt/MassArtArea3";
import MassArtArea4 from "../../ProjectMassArt/MassArtArea4";
import MassArtArea5 from "../../ProjectMassArt/MassArtArea5";
import MassArtBanner from "../../ProjectMassArt/MassArtBanner";
import MassArtBannerImg from "../../ProjectMassArt/MassArtBannerImg";
import MassArtFooter from "../../ProjectMassArt/MassArtFooter";
import Navbar from "../../Shared/Navbar/Navbar";



const MassArtHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <MassArtBanner />
            </div>
            <MassArtBannerImg />
            <MassArtArea />
            <MassArtArea2 />
            <MassArtArea3 />
            {/* <MassArtArea4 /> */}
            <MassArtArea5 />
            <MassArtFooter />
        </div>
    );
};

export default MassArtHome;