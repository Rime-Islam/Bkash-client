import Banner from "../../component/homePage/Banner";
import Extra from "../../component/homePage/Extra";
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
            <ExtraTwo />
            <Feature />
            <WhyUs />
            <Testimonial />
            <Review />
        </div>
    );
};

export default Home;