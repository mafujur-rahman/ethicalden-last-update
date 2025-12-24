import ELajArea from "../../ProjectELaj/ELajArea";
import ELajArea2 from "../../ProjectELaj/ELajArea2";
import ELajArea3 from "../../ProjectELaj/ELajArea3";
import ELajArea4 from "../../ProjectELaj/ELajArea4";
import ELajArea5 from "../../ProjectELaj/ELajArea5";
import ELajBanner from "../../ProjectELaj/ELajBanner";
import ELajBannerImg from "../../ProjectELaj/ELajBannerImg";
import ELajFooter from "../../ProjectELaj/ELajFooter";
import Navbar from "../../Shared/Navbar/Navbar";


const ELajHome = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar backgroundColor="white" textColor="black" />


            {/* banner */}
            <div className='mt-20 mb-5 md:mb-8 lg:mb-10 px-5 md:px-10 lg:px-10 xl:px-20 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <ELajBanner />
            </div>
            <ELajBannerImg />
            <ELajArea />
            <ELajArea2 />
            <ELajArea3 />
            <ELajArea4 />
            <ELajArea5 />
            <ELajFooter />
        </div>
    );
};

export default ELajHome;