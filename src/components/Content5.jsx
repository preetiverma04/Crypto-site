import React from "react";
import './Content5.css';
const Content5 = () => {
    return (
        <>
            <div className="heading1_content_5"><h1>Our Mission</h1></div>
            <div><p className="content5_p1">Contrary to popular belief, Lorem Ipsum is not simply random text.  45 BC text is</p><p className="content5_p2">It has roots in a piece</p></div>
            <div className="Content_5_image_outer">
            <div className="heading2Content5_outer">
                <div className="Unify"> <h5 className="unifyh3">Unify</h5></div>
                <div className="simplify"> Simplify</div>
                <div className="Innovate"> Innovate</div>
            </div>
            <div className="paragraph_image_content5">
            <div className="paragraph_img_content5"><p className="p">rem Ipsum is simply dummy text of the printing and <br></br>
                typesetting industry. Lorem Ipsum has been the industry's <br></br>
                standard dummy text ever since the 1500s, when an<br></br>
                unknown.</p>
            </div>
            <div className="Content5img">
                <img src={require("../images/Content5img.png")} alt="iamge" className="Content5img"/>
            </div>
            </div>
            </div>
        </>

    );
}
export default Content5;