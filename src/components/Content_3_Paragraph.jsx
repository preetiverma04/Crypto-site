import React from 'react'
const Content_3_Paragraph = () => {

    const Content3P = [
        { disc1: "Contrary to popular belief, Lorem Ipsum is not simply random text.  45 BC text is" },
        { disc2: " It has roots in a piece" }
    ];
    const ShowP = Content3P.map((item, index) => (
        <>
            <div key={index} className='content_3_disc1'>
                {item.disc1}
            </div>
            <div key={index} className='content_3_disc2'>
                {item.disc2}
            </div>

        </>
    ))
    return (
        <div>
            <p className='content_3_disc1'>{ShowP}</p>
            <p className='content_3_disc2'></p>

        </div>
    );
}
export default Content_3_Paragraph;

