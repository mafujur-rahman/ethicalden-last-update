import MarziiArea from "../../ProjectMarzii/MarziiArea";
import MarziiArea2 from "../../ProjectMarzii/MarziiArea2";
import MarziiArea3 from "../../ProjectMarzii/MarziiArea3";
import MarziiArea4 from "../../ProjectMarzii/MarziiArea4";
import MarziiArea5 from "../../ProjectMarzii/MarziiArea5";
import MarziiBanner from "../../ProjectMarzii/MarziiBanner";
import MarziiBannerImg from "../../ProjectMarzii/MarziiBannerImg";
import MarziiFooter from "../../ProjectMarzii/MarziiFooter";
import Navbar from "../../Shared/Navbar/Navbar";


const MarziiHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <MarziiBanner />
            </div>
            <MarziiBannerImg />
            <MarziiArea />
            <MarziiArea2 />
            <MarziiArea3 />
            <MarziiArea4 />
            <MarziiArea5 />
            <MarziiFooter />
        </div>
    );
};

export default MarziiHome;