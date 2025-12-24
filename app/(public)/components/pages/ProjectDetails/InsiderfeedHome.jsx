import InsiderfeedArea from "../../ProjectInsiderfeed/InsiderfeedArea";
import InsiderfeedArea2 from "../../ProjectInsiderfeed/InsiderfeedArea2";
import InsiderfeedArea3 from "../../ProjectInsiderfeed/InsiderfeedArea3";
import InsiderfeedArea4 from "../../ProjectInsiderfeed/InsiderfeedArea4";
import InsiderfeedArea5 from "../../ProjectInsiderfeed/InsiderfeedArea5";
import InsiderfeedBanner from "../../ProjectInsiderfeed/InsiderfeedBanner";
import InsiderfeedBannerImg from "../../ProjectInsiderfeed/InsiderfeedBannerImg";
import InsiderfeedFooter from "../../ProjectInsiderfeed/InsiderfeedFooter";
import Navbar from "../../Shared/Navbar/Navbar";



const InsiderfeedHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <InsiderfeedBanner />
            </div>
            <InsiderfeedBannerImg />
            <InsiderfeedArea />
            <InsiderfeedArea2 />
            <InsiderfeedArea3 />
            <InsiderfeedArea4 />
            <InsiderfeedArea5 />
            <InsiderfeedFooter />
        </div>
    );
};

export default InsiderfeedHome;