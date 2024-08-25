import Banner from "../../component/homePage/Banner";
import Feature from "../../component/homePage/Feature";
import Review from "../../component/homePage/Review";
import Testimonial from "../../component/homePage/Testimonial";
import WhyUs from "../../component/homePage/WhyUs";


const Home = () => {
    return (
        <div>
            <Banner />
            <Feature />
            <WhyUs />
            <Testimonial />
            <Review />
        </div>
    );
};

export default Home;