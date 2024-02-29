import React from "react";
function Content2() {
    return (
        <>
            <div className="outer">
                <div>
                    <p className="content_2_paragraph"> <h1> 0%<sup>APR</sup></h1></p>
                    <p className="content_2_paragraph"> <h1>Industry Loading Rewards</h1></p>
                    <p className="content_2_paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text.  45 BC text is<br />It has roots in a piece
                    </p>
                </div>
                <div class="content_2_right">
                    <div className="usdc">
                        <div className="Usdc_1">
                            <img src={require("../images/Usdc1.png")} alt="USDC image" className="Usdc_1" />
                            <h5 className="Usdc_1"> USDC</h5>
                        </div>
                        <h1 className="usdc_1_percent"> 0%</h1>
                        <div>
                            <h5 className="Usdc_2"> USDC</h5>
                        </div>
                        <h1 className="usdc_2_percent"> 0%</h1>
                    </div>
                    <div />
                    <div className="Eth_Enb">
                        <div className="Eth">
                            <img src={require("../images/Eth.png")} alt="Eth image" className="Eth" />
                            <h5 className="Eth"> ETH</h5>
                        </div>
                        <h1 className="Eth_percent"> 0%</h1>

                        <div className="Enb">
                            <img src={require("../images/Enb.png")} alt="Enb image" className="Enb" />
                            <h5 className="Enb1"> ENB</h5>
                        </div>
                        <h1 className="Enb_percent"> 0%</h1>
                        <div />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Content2;