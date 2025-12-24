
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import OurWorksArea3 from './OurWorksArea3';

const OurWorksHome = () => {
    return (
        <div className="bg-[#111] text-white ">
            <Navbar backgroundColor="#111" textColor="white" />
            <div>
                <OurWorksArea3 />
            </div>
            <Footer />
        </div>
    );
};

export default OurWorksHome;