import Banner from "../../component/homePage/Banner";
import Extra from "../../component/homePage/Extra";
import Extrafour from "../../component/homePage/Extrafour";
import ExtraThree from "../../component/homePage/ExtraThree";
import ExtraTwo from "../../component/homePage/ExtraTwo";
import Feature from "../../component/homePage/Feature";
import Review from "../../component/homePage/Review";
import Testimonial from "../../component/homePage/Testimonial";
import WhyUs from "../../component/homePage/WhyUs";


const Home = () => {
    return (
        <div>
            <Banner /> 
            <Extra />
             <Extrafour />
             <Feature /> 
            <WhyUs />
            <ExtraThree />
            <ExtraTwo />
            <Testimonial />

            <Review />
        </div>
    );
};

export default Home;