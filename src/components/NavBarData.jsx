import React from "react";

const Nav = () => {
  const navItems = ["Governance", "Security", "Documentation", "FAQ"];

  const navElements = navItems.map((item, index) => (
    <div key={index} className="nav">
      {item}
    </div>
  ));

  return <>{navElements}</>;
};

export default Nav;
