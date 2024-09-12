// App.js
import React, { useEffect } from 'react';
import '../App.css'; // Import your stylesheets
import '../responsive/reponsive.css';

const Home = () => {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    const toggleMenu = () => {
      navMenu.classList.toggle('active');
    };

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', toggleMenu);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <a href="#">
                <p><b className="big">Big</b><span className="lite">Lite</span></p>
              </a>
            </div>
            <ul className="nav-menu">
              <li><a className="a" href="#">HOME</a></li>
              <li><a className="a" href="#">ABOUT US</a></li>
              <li className="dropdown">
                <div className="menu-service">
                  <a className="a" href="#">SERVICE</a>
                  <img className="img" src={require('../image/down.png')} alt="Dropdown" />
                  <ul className="dropdown-menu">
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Wordpress Design</a></li>
                    <li><a href="#">Mobile Application</a></li>
                    <li><a href="#">Internet Marketing</a></li>
                    <li><a href="#">Social Media Management</a></li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <div className="menu-service">
                  <a className="a" href="#">PORTFOLIO</a>
                  <img className="img" src={require('../image/down.png')} alt="Dropdown" />
                  <ul className="dropdown-menu">
                    <li><a href="#">Website</a></li>
                    <li><a href="#">Wordpress</a></li>
                    <li><a href="#">Mobile App</a></li>
                    <li><a href="#">Icons</a></li>
                    <li><a href="#">Logos</a></li>
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">Social Media Management</a></li>
                  </ul>
                </div>
              </li>
              <li><a className="a" href="#">BLOG</a></li>
              <li><a className="a" href="#">CONTACT US</a></li>
            </ul>
            <div className="menu-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
        <div className="banner">
          <div className="banner-image">
            <img className="image" src="https://www.graphicsfuel.com/wp-content/uploads/2013/01/BisLite/images/banner_image.jpg" alt="Banner" />
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="session1">
          {[
            {
              imgSrc: require('../image/cleantheme.png'),
              title: 'CLEAN THEME',
              content: 'Ut net lorem id orci convallies porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida augue sed viverra. Quisque at nulla leo, non, aliquet mi'
            },
            {
              imgSrc: require('../image/reponsive.png'),
              title: 'RESPONSIVE DESIGN',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod placerat dui et tincidunt. Sed sollicitudin posuere auctor. Phasellus at ultricies nisl. Integer at leo eros.'
            },
            {
              imgSrc: require('../image/fully.png'),
              title: 'FULLY LAYERD PSD',
              content: 'Phasellus lobortis metus non augue sodales volutpat. Vestibulum sit amet nibh eros, hendrerit venenatis est. In vitae nulla nec purus cursus pretium sed id magna.'
            },
            {
              imgSrc: require('../image/reddy.png'),
              title: 'READY FOR CODING',
              content: 'Vivamus convallis feugiat mauris sed posuere. Nam rutrum, quam quis euismod commodo, elit est porta quam, non placerat eros neque porta ante. Fusce quis odio uma.'
            }
          ].map((session, index) => (
            <div key={index} className="session-container">
              <div className="session-header">
                <div>
                  <img src={session.imgSrc} alt={session.title} />
                </div>
                <p className="text-p">{session.title}</p>
              </div>
              <p className="session-content">{session.content}</p>
              <div className="session-footer">
                <img src={require('../image/icon-arrow.png')} alt="Arrow" />
                <p>Read More</p>
              </div>
            </div>
          ))}
        </div>
      </header>
      <div className="body">
        <div className="session2">
          <div className="session-img">
            <img className="migs" src={require('../image/late.png')} alt="Latest Work" />
            <p className="session2-p">LATEST WORK</p>
          </div>
          <div className="session-img-arrow">
            <img src={require('../image/bluearrow_left.png')} alt="Left Arrow" />
            <img src={require('../image/bluearrow_right.png')} alt="Right Arrow" />
          </div>
        </div>
        <div className="session-border"></div>
        <div className="session3">
          {[
            require('../image/nootbook.png'),
            require('../image/orange.png'),
            require('../image/abd.png'),
            require('../image/arrow.png')
          ].map((src, index) => (
            <div key={index} className="session3-container">
              <img className="images" src={src} alt={`Session ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="session-border"></div>
        <div className="session4">
          <div>
            <div className="session4-item1">
              <div className="session-img">
                <img className="migs" src={require('../image/teste.png')} alt="Testimonials" />
                <p className="session2-p">TESTIMONIALS</p>
              </div>
            </div>
            <div>
              <p className="session4-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nulla sapien, at aliquam erat. Sed vitae massa tellus. Aliquam commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam nec nisi in nisl euismod fringilla.
              </p>
              <p className="session4-p1">John Travis, CEO, DomainName.com</p>
            </div>
          </div>
          <div>
            <div>
              <div className="session-img">
                <img className="migs" src={require('../image/client.png')} alt="Our Clients" />
                <p className="session2-p">OUR CLIENTS</p>
              </div>
            </div>
            <div className="list-image">
              {[
                'https://www.graphicsfuel.com/wp-content/uploads/2013/01/BisLite/images/client01.jpg',
                'https://www.graphicsfuel.com/wp-content/uploads/2013/01/BisLite/images/client02.jpg',
                'https://www.graphicsfuel.com/wp-content/uploads/2013/01/BisLite/images/client03.jpg',
                'https://www.graphicsfuel.com/wp-content/uploads/2013/01/BisLite/images/client04.jpg',
                'https://www.graphicsfuel.com/wp-content/uploads/2013/01/BisLite/images/client04.jpg',
                'https://www.graphicsfuel.com/wp-content/uploads/2013/01/BisLite/images/client06.jpg'
              ].map((src, index) => (
                <img key={index} className="img-client" src={src} alt={`Client ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="session5">
          <div className="session5-download">
            <p className="session5-p">
              This is a clean and modern, four column website PSD template. You can code it into a Wordpress website, HTML5 responsive website for your personal or client works. So ahead and download this wonderful PSD template!
            </p>
            <div className="session5-images">
              <img src={require('../image/download.png')} alt="Download" />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section footer-about">
          <h3>ABOUT US</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod placerat dui et tincidunt. Sed sollicitudin posuere auctor. Phasellus at ultricies nisl. Integer at leo eros. Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie.</p>
        </div>
        <div className="footer-section footer-links">
          <h3>USEFUL LINKS</h3>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">FAQ</a>
            <a href="#">Support</a>
          </div>
        </div>
        <div className="footer-section footer-contact">
          <h3>CONTACT US</h3>
          <p>1234 Street Name, City, Country</p>
          <p>Email: contact@domain.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section footer-social">
          <h3>FOLLOW US</h3>
          <img src={require('../image/social.png')} alt="Social Media" />
        </div>
      </footer>
    </div>
  );
}

export default Home;