import "./BenefitsBox.css"
import Treadmill from "../../assets/treadmill.png";
import Notepad from "../../assets/notepad.png";
import Clock from "../../assets/clock.png";

export default function BenefitsBox() {

    return (
        <div className="benefit-box">

            <div className="benefit">
                <img src={Treadmill} />
                <h3>State of the art equipment</h3>
            </div>
            <div className="benefit">
                <h3>24/7 Access</h3>
                <img src={Clock} />
            </div>
            <div className="benefit long">
                <img src={Notepad} />
                <h3>Detailed Note Keeping</h3>
            </div>
        </div>
    )
}