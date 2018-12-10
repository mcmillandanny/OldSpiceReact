import React from 'react';

export const Footer = () => (
    <div>
        <footer>
            <nav className="footer-nav">
                <h1>Contact Us: </h1>
                    <ul className="nav-links">
                        <li><a src="http://facebook.com"><img className="fb" src={require('../assets/images/facebook.png')} alt="Facebook"/></a></li>
                        <li><a src="http://twitter.com"><img src={require('../assets/images/twitter.png')} alt="Twitter"/></a></li>
                        <li><a src="http://youtube.com"><img src={require('../assets/images/youtube.png')} alt="Youtube"/></a></li>
                        <li><a src="http://instagram.com"><img src={require('../assets/images/insta.png')} alt="Insta"/></a></li>
                    </ul>
            </nav>
        </footer>

    </div>
  )
  
  export default Footer;