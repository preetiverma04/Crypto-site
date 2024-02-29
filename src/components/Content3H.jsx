import React from "react";

const Content3H = () => {

    const Content_3_Haeding = [
        { title: "Industry Loading Rewards" }

    ];
    const show = Content_3_Haeding.map((item, index) => (<>
        <div key={index} className="content_3_heading">
            {item.title}
        </div>

    </>
    ));

    return (
        <>
            <h1 className="content_3_heading">{show}</h1>
        </>
    );

}
export default Content3H;