import "./Home.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import HomeBannerImage from "../../assets/hero_banner.png";
import WaveHeader from "../../components/WaveHeader/WaveHeader";
import BenefitsBox from "../../components/BenefitsBox/BenefitsBox";
import ArticlesSection from "../../components/ArticlesSection/ArticlesSection";
export default function Home(){

    return(
        <>
            <HeroBanner image={HomeBannerImage}>
                <h1>Unsinkable Gains</h1>
                <h2>Crash through your fitness goal</h2>
            </HeroBanner>
            <WaveHeader text="LET THESE BENEFITS SINK IN"/>
            <BenefitsBox/>
            <ArticlesSection/>

        </>
    )
}