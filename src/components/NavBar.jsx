import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const navigate =useNavigate();
    const go_graviance=()=>{
            navigate('/Mark/Con2');
    }
    const go_Security=()=>{
        navigate("/Mark/Con2/Con3")
    }
    const go_Documentation =()=>{
        navigate("/Mark/Con2/Con3/Con4/Con5")
    }
    const go_FAQ =()=>{
        navigate("/Mark/Con2/Con3/Con4/Con5/Con6")
    }
  
    return (
        
        <> <div id="outer">
            <li id="logo">Crypto</li>
            <div id="nav-bar">
                <div className='nav' onClick={go_graviance}>Governance</div>
                <div className='nav' onClick={go_Security}>Security</div>
                <div className='nav' onClick={go_Documentation}>Documentation</div>
                <div className='nav'onClick={go_FAQ}>FAQ</div>
                <img src={require("../images/linkdin.png")}alt="linkdin image" className='navimage1' />
                <img src={ require("../images/group.png")} alt='group image' className='navimage2'/>
                <button className='nav-button' >Launch App</button>
            </div>
        </div>
           
        </>
        );
}
export default NavBar;