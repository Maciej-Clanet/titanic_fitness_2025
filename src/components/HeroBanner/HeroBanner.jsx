import "./HeroBanner.css";

export default function HeroBanner({image, children}){

    return(
        <div className="hero-banner" style={`background-image: url(${image})`}>
            {children}
        </div>
    )
}