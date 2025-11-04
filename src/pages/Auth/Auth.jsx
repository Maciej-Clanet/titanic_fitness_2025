import "./Auth.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"

export default function Auth(){

    return(
        <div className="auth-layout">
            <HeroBanner image={AuthImage1}/>
            <div className="auth-form-column">
                stuff
            </div>
        </div>
    )
}