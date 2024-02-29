import React from "react";
import './Content6.css';
const Content6 = () => {
    return (
        <>
            <div ><h1 className="Content_6_heading1">Frequently Asked Questions</h1>
                <p className="Content6_paragraph1">Questions and Answers, are listed questions and answers, all supposed to be</p>
                <p className="Content6_paragraph2">commonly asked in some context.</p>
            </div>
            <div className="content_6_outer">
            <div className="content6_main_div">
                <div className="content6_haedings_div">
                    <div>
                        <img src={require("../images/content6img1.png")} alt="image" className="content6img1" />
                        <h1 className="h1content6">?</h1>
                    </div>
                    <div >
                        <h2 className="haeding_content6_2">What is crypto capital?</h2>
                        <img src={require("../images/arrowdown1.png")} className="arrowdowncontent6" />
                    </div>
                </div>
                <div className="paragraphscontent6">
                    <p className="paragraphscontent6_1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's <br></br>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and<br></br>scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap <br></br>into electronic typesetting.</p>
                </div>
                <div className="content6_haedings_div">
                    <div>
                        <img src={require("../images/content6img1.png")} alt="image" className="content6img1" />
                        <h1 className="h1content6">?</h1>
                    </div>
                    <div >
                        <h2 className="haeding_content6_2">Where are the verified contacts??</h2>
                        <img src={require("../images/rightarrow.png")} className="arrowdowncontent6" />
                    </div>
                    
                </div>
                <div className="content6_haedings_div">
                    <div>
                        <img src={require("../images/content6img1.png")} alt="image" className="content6img1" />
                        <h1 className="h1content6">?</h1>
                    </div>
                    <div >
                        <h2 className="haeding_content6_2">How is daily revenue distributed</h2>
                        <img src={require("../images/rightarrow.png")} className="arrowdowncontent6" />
                    </div>
                    
                </div>

                <div className="content6_haedings_div">
                    <div>
                        <img src={require("../images/content6img1.png")} alt="image" className="content6img1" />
                        <h1 className="h1content6">?</h1>
                    </div>
                    <div >
                        <h2 className="haeding_content6_2">Why dose the website occasionally not display certain data?</h2>
                        <img src={require("../images/rightarrow.png")} className="arrowdowncontent6" />
                    </div>
                    
                </div>
            </div>
            </div>

        </>
    )
}
export default Content6;