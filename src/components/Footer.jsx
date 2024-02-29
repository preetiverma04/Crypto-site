import React from "react";
import './Footer.css';
const Footer = () => {
    return (
        <>

            <div className="logofooter">Crypto</div>
            <div className="footercontentouter">
                <p className="footerparagraph1">Block Sec focuses on the security of the <br></br>
                    whole life cycle of smart contracts,<br></br>
                    specializing in rigorous testing</p>
                <div className="footercontentmain">
                    <div className="footerlinks">
                        <div><b>Useful Links</b></div>
                        <div>Governance</div>
                        <div> Security</div>
                        <div>Documentation</div>
                        <div> FAQ</div>
                    </div>
                    <div className="footerCommunity">
                        <div><b>Community</b></div>
                        <div>Help Center</div>
                        <div> Partners</div>
                        <div>Suggestion</div>
                        <div> Blog</div>
                    </div>
                    <div className="Communityjoin"><b>join Our Community</b></div>
                    <div className="footercommunityparagraph">
                        <p>
                            Joining a community is a wonderful way to <br></br>
                            connect with like-minded individuals, share <br></br>
                            common interests.
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Footer;