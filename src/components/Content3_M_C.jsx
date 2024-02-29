import React from 'react';
import Content3Image1 from '../images/content_3_img1.png';
import Content3Image2 from '../images/Content_3_img2.png';
import Content3Image3 from '../images/Content_3_img3.png';


const Content3_M_C = () => {
  const Content3_Text_image = [
    { image: Content3Image1, title: "Better Uptime" },
    { image: Content3Image2, title: "Blocksec" },
    { image: Content3Image3, title: "Better Uptime" }
  ];

  const Show_I_T = Content3_Text_image.map((item, index) => (
    <div key={index}>
      <img src={item.image} alt="images" id="content_3_M_C_image"/>
      <p id="content_3_title">{item.title}</p>
    </div>
  ));

  return (
    <>
      <div id="content_3_image_text">
        {Show_I_T}
      </div>
    <div className='content_3_image_text_border'>
      <p className='content_3_paragraphs'>Contrary to popular belief, Lorem Ipsum is not simply random text.  45 BC text is</p>
      <p className='content_3_paragraphs1'> It has roots in a piece</p>

    </div>
     
      
    </>
  );
};

export default Content3_M_C;
