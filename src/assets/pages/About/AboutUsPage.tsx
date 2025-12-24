import {type FC} from "react";
import AboutUsBlock from "../../components/AboutUs/AboutUsBlock";
import BrandConcept from "../../components/AboutUs/BrandConcept";
import BrandConceptText from "../../components/AboutUs/BrandConceptText";
import Location from "../../components/AboutUs/Location";


interface AboutUsPageProps{

}

const AboutUsPage: FC<AboutUsPageProps> = ()=>{
    return(
        <div className="AboutUsArea">
        <AboutUsBlock/>
        <>
        <BrandConcept/>
        <BrandConceptText/>
        </>
        <Location/>
        </div>
    )
};

export default AboutUsPage;