import React from "react";

const MarketData = () => {
  const Data = [
    { title: "Total Market Size", amount: "$605.04M" },
    { title: "Total Market Size", amount: "$605.04M" },
    { title: "Total Market Size", amount: "$605.04M" }
  ];

  const showData = Data.map((item, index) => (
    <div key={index} className='f1'>
      <div>{item.title}</div>
      <div>
        <h1>{item.amount}</h1>
      </div>
    </div>
  ));

  return (
    <div className='webpage2'>
      {showData}
    </div>
  );
};

export default MarketData;
