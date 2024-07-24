import React from 'react';


import logo from "../../assets/logo.jpg"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Des Moines University" className="footer-logo" />
         
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Mobile: 92294 98055</p> 
          <p>Phone: 99778 35161</p>
           <p>Landline:0731 4014578</p>
          
          <p>Email: info@ipsacademy.org</p>
          
        </div>
        <div className="footer-section">
          <h3>Address</h3>
        <p>IPS Academy, A.B Road, Rajendra Nagar</p>  <p>Indore (M.P)</p>
    
        </div>
        
      </div>
      <div className="footer-bottom">
        <div className="footer-socials">

          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
