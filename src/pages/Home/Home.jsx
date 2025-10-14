import "./Home.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import HomeBannerImage from "../../assets/hero_banner.png";

export default function Home(){

    return(
        <>
            <HeroBanner image={HomeBannerImage}>
                <h1>Unsinkable Gains</h1>
                <h2>Crash through your fitness goal</h2>
            </HeroBanner>
            this is the home page
        </>
    )
}