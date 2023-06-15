import banana from "./assets/banana.jpeg"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="my-name">
                    Hi, This is Hubert Chen
                </div>
                <p className="self-intro">
                    this is the section for self introduction
                </p>
            </div>
            
            <div className="about-right">
                <img src={banana} alt="" className="self-photo"/>
            </div>
            

            
        </div>
    );
};

export default About;