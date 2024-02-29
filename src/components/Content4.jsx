import React from 'react';
import './Content4.css'
const Content4=()=>{
    return(
        <>
       
        <h1 className='Content_4_heading'> How it Works</h1>
        <div className='outer_h_div'>
        <div className='Content4_h_2'>
        <h4 className='Content_4_heading_2'> DNT Lockers</h4>
        </div>
        <div className='Content_4_heading_3'>
        <h4  className='Content_4_heading_2'> Landers and borrowers</h4>
        </div>
        </div>
        <div className='content4_text_image_outer'>
        <div className='content4_image_text'>
            <img src={require("../images/Content4img1.png") } alt="lock pont liquidity" target="_blank" className='Content4img2'/>
            <h1>Lock $RDNT liquidity</h1>
            <p>Contrary  popular  belief, Lorem  Ipsum is not simply random <br></br>
            It has roots in a piece</p>
        </div>
        <div className='content4_image_text'>
            <img src={require("../images/Content4img2.png") } alt="lock pont liquidity" target="_blank" className='Content4img2'/>
            <h1>Lock $RDNT liquidity</h1>
            <p>Contrary  popular  belief, Lorem  Ipsum is not simply random <br></br>
            It has roots in a piece</p>
        </div>
        <div className='content4_image_text'>
            <img src={require("../images/Content4img3.png") } alt="lock pont liquidity" target="_blank" className='Content4img3'/>
            <h1>Lock $RDNT liquidity</h1>
            <p>Contrary  popular  belief, Lorem  Ipsum is not simply random <br></br>
            It has roots in a piece</p>
        </div>
       </div>
        </>
        
    );

}
export default Content4;