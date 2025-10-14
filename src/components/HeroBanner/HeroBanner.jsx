import "./HeroBanner.css";

export default function HeroBanner({image, children}){

    return(
        <div className="hero-banner" style={{
            backgroundImage: `url(${image})` 
        }}>
            {children}
        </div>
    )
}